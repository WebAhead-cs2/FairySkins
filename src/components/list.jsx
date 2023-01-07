import './styleItemsList.css';
import React from 'react'
// import ItemsList from './itemsList'
import ProductList from './productList'
import ComponentCart from '../cart/componentCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Navbar from './navbar';
import { useEffect } from 'react';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = '/cart';
const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]")

function List({catFilter,priceFilter}) {
    const [cart, setCart] = useState(cartFromStorage);
    const [page, setPage] = useState(PAGE_PRODUCTS)

    const addToCart=(product) => {
        setCart([...cart, {...product}])  
    }
    const removeCart = (productToremove) =>{
        setCart(cart.filter(product => product !== productToremove))
    }
    const navigateTo = (nextPage) =>{
        setPage(nextPage);
    }
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart]);

    const navigate = useNavigate();
   
  return (
    <div > 
      
        {/* <button onClick={()=> navigate(PAGE_CART)} >cart {cart.length}</button> */}
        {/* <button onClick={()=> navigateTo(PAGE_PRODUCTS)} >products</button> */}
        
        {page === PAGE_PRODUCTS
         &&( <ProductList catFilter={catFilter} priceFilter={priceFilter} addToCart={addToCart} />)}    
        {page === PAGE_CART
         && ( <ComponentCart cart={cart} removeCart={removeCart} />)} 
          </div>
  )
}

export default List