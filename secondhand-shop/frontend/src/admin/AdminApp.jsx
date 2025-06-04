import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import ProductList from './ProductList';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';

const AdminApp = () => (
    <Admin dataProvider={simpleRestProvider('http://localhost:5000')}>
        <Resource
            name="products"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
        />
    </Admin>
);

export default AdminApp;
