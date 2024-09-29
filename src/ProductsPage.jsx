import { ProductsIndex } from "./ProductsIndex"
// import { CreateProduct } from "./CreateProduct"
// import { CreateProductModal } from "./CreateProductModal"
import { useState, useEffect } from 'react'
import axios from 'axios';

export function ProductsPage() {

  const [products, setProducts] = useState([]);
  // const [isCreateProductModalVisible, setCreateProductModalVisible] = useState();

const handleProductIndex = () => {
  // console.log("sublime");
  axios.get("http://localhost:3000/products.json").then(response => {
    // console.log(response);
    setProducts(response.data)
  })
}
 
// const handleCreate = () => {
//   console.log("hello create product");
// }
// const handleCreate = () => {
//   console.log("create action");
// }

// const showModal =  () => {
//   setCreateProductModalVisible(true)
// }

// const closeModal = () => {
//   setCreateProductModalVisible(false)
// }

useEffect(handleProductIndex, []);

  return (
    <main>
    {/* <button onClick={showModal}>List Product</button> */}
    {/* <CreateProductModal show={isCreateProductModalVisible} onClose={closeModal}>
     <CreateProduct onCreate={handleCreate}/>
    </CreateProductModal> */}
    <ProductsIndex products={products} />
    </main>
  )
}