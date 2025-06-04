const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching product:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('SELECT * FROM products WHERE id = $1', [
            id
        ]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error fetching product by ID:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

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
        console.error('Error inserting product:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
