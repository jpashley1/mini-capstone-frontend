// import { useState, useEffect } from 'react'
// import axios from 'axios';
import { useLoaderData } from "react-router-dom";


// import { ProductInfoModal } from "./ProductInfoModal";

export function ProductsIndex() {
  const products = useLoaderData();
  // const [isProductInfoModalVisible, setProductInfoModalVisible] = useState();
  // const [products, setProducts] = useState([]);
  // const [isCreateProductModalVisible, setCreateProductModalVisible] = useState();

  //  const showModal =  (products) => {
  //   // setProductInfoModalVisible(true)
  //   setCurrentProduct(products)
  //   setProductInfoModalVisible(true)

  // }

  // const closeModal = () => {
  //   setProductInfoModalVisible(false)
  // }

  return (
    <div id="products-index">
      <h1>All Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.images[0].url}></img>
          {/* {product.images_with_default.map(image) => (

        )} */}
          <p>${product.price}</p>
          <p>{product.description}</p>
          {/* <button onClick={handleAddToCart}>add to cart</button> */}
          {/* <button onClick={showModal} onClose={closeModal}>product info
           */}
          {/* </button> */}
        </div>
      ))}
    </div>
  );
}
