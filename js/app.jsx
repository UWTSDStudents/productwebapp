
import React, { useState } from 'react';
import ProductsTable from './components/ProductsTable.jsx';
import AddProductForm from './components/AddProductForm.jsx';
import { readAllProducts } from './products';
 
function App() {
  const [activeTab, setActiveTab] = useState({'add-product': 'active', 'display-products': ''});
  const [products, setProducts] = useState(false);

  const handleTabClick = async (tab) => {
    for(let t in activeTab) activeTab[t] = '';
    activeTab[tab] = 'active';
    setActiveTab(activeTab);
    if(tab == 'display-products')
    {
      setProducts(await readAllProducts());
      console.log("Read products");
    }  
  };

  return (
    <div className="container">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation" onClick={() => handleTabClick('add-product')}>
          <button className={`nav-link ${activeTab['add-product']}`} id="add-product-tab" data-bs-toggle="tab" data-bs-target="#add-product-tab-pane" 
          type="button" role="tab" aria-controls="add-product-tab-pane" aria-selected="true">Add Product</button>
        </li>
        <li className="nav-item" role="presentation" onClick={() => handleTabClick('display-products')}>
          <button className={`nav-link ${activeTab['display-products']}`} id="display-products-tab" data-bs-toggle="tab" data-bs-target="#display-products-tab-pane" 
          type="button" role="tab" aria-controls="display-products-tab-pane" aria-selected="false">Display Products</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="add-product-tab-pane" role="tabpanel" aria-labelledby="add-product-tab" tabIndex="0"><AddProductForm /></div>
        <div className="tab-pane fade" id="display-products-tab-pane" role="tabpanel" aria-labelledby="display-products-tab" tabIndex="1"><ProductsTable products={products} setProducts={setProducts} /></div>
      </div>
    </div>
  );
}

export default App;
