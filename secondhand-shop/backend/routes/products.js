const express = require('express');
const router = express.Router();
const db = require('../db');

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

module.exports = router;
