const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all products
router.get('/', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// POST new product
router.post('/', (req, res) => {
    const { name, description, price, image_url, category_id } = req.body;
    const query = `
    INSERT INTO products (name, description, price, image_url, category_id)
    VALUES (?, ?, ?, ?, ?)
  `;
    const values = [name, description, price, image_url, category_id];

    db.run(query, values, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

module.exports = router;
