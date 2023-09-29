import React, { useState } from 'react';

function ProductRow(props) {
    const [mode, setMode] = useState('Default');
    const [id, setId] = useState(props.id);
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);
    const onEdit = props.onEditClick;
    const onDelete = props.onDeleteClick;

    function handleEditClick(e)
    {
        e.preventDefault();
        setMode('Edit');
    }

    function handleExitEditClick(e)
    {
        e.preventDefault();
        setMode('Default');
    }

    function handleSaveEditClick(e)
    {
        e.preventDefault();
        onEdit({
            id: id,
            name: name,
            price: price
        });
        setMode('Default');
    }

    function handleDeleteClick(e)
    {
        e.preventDefault();
        onDelete(id);
    }
    
    if(mode == 'Edit')
    {
        return (
            <tr>
            <td><input type="text" className="form-control" id="productName" name="productName" required value={name} onChange={(event)=>setName(event.target.value)} /></td>
            <td><input type="number" className="form-control" id="productPrice" name="productPrice" step="0.01" required value={price} onChange={(event)=>setPrice(event.target.value)} /></td>
            <td><button className="btn btn-primary" onClick={handleSaveEditClick}>Save</button></td>
            <td><button className="btn btn-primary" onClick={handleExitEditClick}>Exit</button></td>
            </tr>
        );
    }
    else
    {
        // There is no need to specify the key here
        return (
            <tr>
            <td><a href="#">{name}</a></td>
            <td>{price}</td>
            <td><button className="btn btn-primary" onClick={handleEditClick}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={handleDeleteClick}>Delete</button></td>
            </tr>
        );
    }
 

}

export default ProductRow;