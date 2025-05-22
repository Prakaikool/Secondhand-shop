const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
