// import React, {  useState } from 'react';
import products from "../../api/products.json";
import AfterCart from './CardButtons/AfterCart';
import BeforeCart from './CardButtons/BeforeCart';
import { useSelector } from 'react-redux';
import "./ProductList.css";
  const ProductList =() => {
  const {cartCount} = useSelector((state) => state.cart);

  //these all are created in redux
  // const [count,setCount] = useState(0);
  // console.log(cart,"==cart");

  // const addToCart = () =>{
  //   setCount(1);
  // }
  
   console.log(cartCount)
  return (
    <section className="container">
        {products?.map((product, key) =>(
            <div className="product-container" key={key}>
                <img src={product?.image} alt=""/>
                <h3>{product?.title}</h3>
                {cartCount > 0 ? <AfterCart/> : <BeforeCart/>}
                

            </div>
        ))}
      
    </section>
  )
}

export default ProductList
