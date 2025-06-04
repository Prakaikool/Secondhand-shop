const express = require('express');
const cors = require('cors');
const path = require('path');

const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const adminRoutes = require('./routes/admin');
const usersRoute = require('./routes/users');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5173',
        exposedHeaders: ['Content-Range']
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/admin', adminRoutes);
app.use('/users', usersRoute);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});
