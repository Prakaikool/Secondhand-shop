import { useState, useEffect } from 'react';
import '../pages/CSS/ProductForm.css';

function ProductForm({ product, onSave, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        size: '',
        stock: '',
        category_id: '',
        image: null
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                size: product.size,
                stock: product.stock,
                category_id: product.category_id,
                image: null
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            if (formData[key]) {
                data.append(key, formData[key]);
            }
        }
        onSave(data);
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <h2>{product ? 'Edit product' : 'Add product'}</h2>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Product name"
                />
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    placeholder="Product description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="size">Size</label>
                <input
                    name="size"
                    placeholder="Size"
                    value={formData.size}
                    onChange={handleChange}
                />
                <label htmlFor="stock">Product in stock</label>
                <input
                    name="stock"
                    type="number"
                    placeholder="Stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
                <label htmlFor="category_id">Kategori ID</label>
                <input
                    name="category_id"
                    type="number"
                    placeholder="Kategori ID"
                    value={formData.category_id}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                />
            </div>

            <div className="form-buttons">
                <button type="submit" className="save-btn">
                    Save
                </button>
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
}

export default ProductForm;
