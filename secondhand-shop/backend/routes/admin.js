const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

const isAdmin = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'PKK Second Shupa admin') {
        next();
    } else {
        res.status(403).json({ error: 'Only admin can upload' });
    }
};

router.post('/upload', isAdmin, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(201).json({ imageUrl: `/uploads/${req.file.filename}` });
});

module.exports = router;
