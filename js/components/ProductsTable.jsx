import React, { useState } from 'react';
import ProductRow from './ProductRow.jsx';
import { editProduct, deleteProduct } from '../products';

function ProductTable(props) {

    async function handleEditClick(edits)
    {
      const product = props.products.find((product) => product.id === edits.id);
      if(product !== undefined)
      {
        const response = await editProduct(edits.id, edits.name, edits.price, product.description);
        if(response === true)
        {
          const updatedProducts = props.products.map((product) => {
            if (product.id === edits.id) {
              return {
                id: product.id,
                name: edits.name,
                price: edits.price,
                description: product.description
              };
            }
            return product; // Return the product as is for others
          });  
          props.setProducts(updatedProducts);        
        }
      }
    }

    async function handleDeleteClick(id)
    {
      const response = await deleteProduct(id);
      if(response === true)
      {
          // Filter out the deleted product from the list
          const updatedProducts = props.products.filter((product) => product.id !== id);
          props.setProducts(updatedProducts);
      }
    }

    if(props.products === false)
      return <div><p>Error loading products from the database</p></div>
    else if(props.products.length == 0)
      return <div><p>No products in the database</p></div>
    else
      return (
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
                <th></th>
            </tr>
          </thead>
          <tbody>
          {props.products.map((product, index) => (
            <ProductRow
              id={product.id}
              name={product.name}
              price={product.price}
              key={product.id}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </tbody>
        </table>
      );  
  }
  
  export default ProductTable;