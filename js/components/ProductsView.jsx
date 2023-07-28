import React from 'react';
import ProductsTable from './ProductsTable.jsx';

function ProductsView(props) {
    if(props.products !== false)
      return <div><ProductsTable products={props.products} /></div>
    else
      return <div><p>Failed to load products from the database</p></div>
}

export default ProductsView;