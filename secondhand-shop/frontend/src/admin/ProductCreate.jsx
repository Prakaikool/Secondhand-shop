import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';

const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" fullWidth />
            <TextInput source="description" multiline fullWidth />
            <NumberInput source="price" />
            <TextInput source="size" />
            <NumberInput source="stock" />
            <TextInput source="image_url" fullWidth />
            <ArrayInput source="images">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput source="category_id" />
        </SimpleForm>
    </Create>
);

export default ProductCreate;
