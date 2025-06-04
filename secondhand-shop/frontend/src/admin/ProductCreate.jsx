import { useState } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    useNotify,
    useRedirect
} from 'react-admin';

const ProductCreate = (props) => {
    const [imageFile, setImageFile] = useState(null);
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = async (values) => {
        try {
            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append('name', values.name);
            formData.append('description', values.description);
            formData.append('price', values.price);
            formData.append('size', values.size);
            formData.append('stock', values.stock);

            const res = await fetch('http://localhost:5000/products', {
                method: 'POST',
                body: formData
            });

            if (!res.ok) throw new Error('Upload failed');
            notify('Product created!');
            redirect('/products');
        } catch (err) {
            notify('Error: ' + err.message, { type: 'warning' });
        }
    };

    return (
        <Create {...props}>
            <SimpleForm onSubmit={handleSubmit}>
                <TextInput source="name" />
                <TextInput source="description" multiline />
                <NumberInput source="price" />
                <TextInput source="size" />
                <TextInput source="stock" />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageFile(e.target.files[0])}
                />
            </SimpleForm>
        </Create>
    );
};

export default ProductCreate;
