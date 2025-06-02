const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM categories');
        res.json(result.rows);
    } catch (err) {
        console.error('Failed to fetch categories:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
