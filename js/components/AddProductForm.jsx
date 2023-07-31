import React, { useState } from 'react';
import { insertProduct } from '../products';

function AddProductForm(props) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0.0);
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState(null); // State to manage success/error message
  
    async function handleSubmit(e)
    {
        e.preventDefault();
        const response = await insertProduct(name, price, description);
        if(response === true)
        {
            setName('');
            setPrice(0.0);
            setDescription('');
            setMessage('Product successfully added');
        }
        else
        {
            setMessage('Failed to add product');
        }
    }

    return (
        <form id='add-product-form' onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="productName" name="productName" required value={name} onChange={(event)=>{setName(event.target.value);setMessage(null);}} />
            </div>
            <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">Price</label>
            <input type="number" className="form-control" id="productPrice" name="productPrice" step="0.01" required value={price} onChange={(event)=>{setPrice(event.target.value);setMessage(null);}} />
            </div>
            <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">Description</label>
            <textarea className="form-control" id="productDescription" name="productDescription" rows="4" required value={description} onChange={(event)=>{setDescription(event.target.value);setMessage(null);}} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
            {/* Conditionally render the success/error message */}
            {message && <div className={`form-text text-${message.includes('successfully') ? 'success' : 'danger'}`}>{message}</div>}
        </form>
    );
}

export default AddProductForm;