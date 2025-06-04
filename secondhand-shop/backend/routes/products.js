const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const path = require('path');

// Set up file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage });

// GET all products (for React Admin)
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM products ORDER BY id ASC');
        const total = result.rows.length;

        res.set('Access-Control-Expose-Headers', 'Content-Range');
        res.set('Content-Range', `products 0-${total - 1}/${total}`);
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST: Create product with image
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, description, price, size, stock } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const result = await db.query(
            `INSERT INTO products (name, description, price, image_url, size, stock)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [name, description, price, imageUrl, size, stock]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Upload failed:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
