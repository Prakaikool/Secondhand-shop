import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';

const ProductEdit = (props) => (
    <Edit {...props}>
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
    </Edit>
);

export default ProductEdit;
