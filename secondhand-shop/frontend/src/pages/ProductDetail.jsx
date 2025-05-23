import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error('Error loading product', err));
    }, [id]);

    if (!product) return <p>Laoding product...</p>;

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} SEK</p>
            <p>{product.category_id}</p>
        </div>
    );
}

export default ProductDetail;
