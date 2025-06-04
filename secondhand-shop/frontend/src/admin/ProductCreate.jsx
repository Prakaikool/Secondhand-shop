import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton
} from 'react-admin';

const ProductList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="size" />
            <NumberField source="price" />
            <NumberField source="stock" />
            <EditButton />
        </Datagrid>
    </List>
);

export default ProductList;
