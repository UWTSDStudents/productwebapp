import Axios from 'axios';

async function readAllProducts()
{
    try
    {
    const products = [];
    const response = await Axios({
        method: 'get',
        url: `${process.env.REACT_APP_PRODUCTS_API_URL}/products`,
        responseType: 'json'
    });

    response.data.forEach((item) => {
        products.push({
           id: item.Id,
           name: item.Name,
           price: item.Price,
           description: item.Description
        });
     });

     return products;
    }
    catch(error)
    {
        console.log(`Read all products failed with error: ${error}`);
        return false;
    }
}

async function insertProduct(name, price, description)
{
    try {
        const response = await Axios({
            method: 'post',
            url: `${process.env.REACT_APP_PRODUCTS_API_URL}/products`,
            data: {
                Name: name,
                Price: price,
                Description: description
            },
            responseType: 'json'
        });
        console.log('Product added successfully:', response.data);
        return true;
      } catch (error) {
        console.error('Failed to add product:', error);
        return false;
      }
}


async function editProduct(id, name, price, description)
{
    try {
        const response = await Axios({
            method: 'put',
            url: `${process.env.REACT_APP_PRODUCTS_API_URL}/products/${id}`,
            data: {
                Name: name,
                Price: price,
                Description: description
            },
            responseType: 'json'
        });
        console.log('Product edited successfully:', response.data);
        return true;
      } catch (error) {
        console.error('Failed to edit product:', error);
        return false;
      }
}

async function deleteProduct(id)
{
    try {
        const response = await Axios({
            method: 'delete',
            url: `${process.env.REACT_APP_PRODUCTS_API_URL}/products/${id}`,
            responseType: 'json'
        });
        console.log('Product deleted successfully:');
        return true;
      } catch (error) {
        console.error('Failed to delete product:', error);
        return false;
      }
}

export { readAllProducts, insertProduct, editProduct, deleteProduct };