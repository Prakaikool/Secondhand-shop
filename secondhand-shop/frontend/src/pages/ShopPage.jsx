import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));

        axios
            .get('http://localhost:5000/categories')
            .then((res) => setCategories(res.data))
            .catch((err) => console.error('Fail to load categories', err));
    }, []);

    return (
      <div className='shop-page'>
        <h2>All products</h2>

      </div>
    )
}

export default ShopPage;
