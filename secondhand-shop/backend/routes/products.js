const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.all(`SELECT * FROM products`, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

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

router.get('/id', (req, res) => {
    const id = req.params.id;

    db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!row) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(row);
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM products WHERE id = ?', [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
});

router.put('/:id', (req, res) => {
    const { name, description, price, image_url, category_id } = req.body;
    const id = req.params.id;
    const query = `
    UPDATE products
    SET name = ?, description = ?, price = ?, image_url = ?, category_id = ? WHERE id = ?`;

    db.run(
        query,
        [name, description, price, image_url, category_id, id],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ updated: this.changes });
        }
    );
});

module.exports = router;
