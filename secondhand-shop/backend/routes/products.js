const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage });

router.get('/', async (req, res) => {
    const search = req.query.search || '';

    try {
        const result = await db.query(
            `SELECT products.*, categories.name AS category_name
           FROM products
           JOIN categories ON products.category_id = categories.id
           WHERE LOWER(products.name) LIKE LOWER($1)
              OR LOWER(categories.name) LIKE LOWER($1)`,
            [`%${search}%`]
        );

        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching products with search:', err);
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
        const { name, description, price, size, stock, category_id } = req.body;
        const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

        const result = await db.query(
            `INSERT INTO products (name, description, price, image_url, size, stock, category_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [name, description, price, imageUrl, size, stock, category_id]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error inserting product:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.put('/:id', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { name, description, price, size, stock, category_id } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const result = await db.query(
            `UPDATE products SET
             name = $1,
             description = $2,
             price = $3,
             image_url = COALESCE($4, image_url),
             size = $5,
             stock = $6,
             category_id = $7
             WHERE id = $8 RETURNING *`,
            [name, description, price, imageUrl, size, stock, category_id, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error updating product:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query(
            'DELETE FROM products WHERE id = $1 RETURNING *',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(204).send();
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
