const express = require('express');
const cors = require('cors');
require('dotenv').config();
app.use('/uploads', express.static('uploads'));

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const db = require('./db');

const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
