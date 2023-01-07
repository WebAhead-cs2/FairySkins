import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Navbar from "../components/navbar";

export default function ComponentCart() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const historyFromStorage = JSON.parse(localStorage.getItem("history") || "[]");
  const [cart, setCart] = useState(cartFromStorage);
  const [history, setHistory] = useState(historyFromStorage);

  const addToHistory=(product) => {
    console.log("history");
    setHistory([...history, {...product}])  
    clearCart()
}

  const removeCart = (productToremove) => {
    setCart(cart.filter((product) => product !== productToremove));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const clearCart = () => {
    setCart([]);
  };
  const clearHistory = () => {
    setHistory([]);
  };

  const getTotalsum = () => {
    return cart.reduce((sum, {price}  ) => sum + price, 0);
  };
  

  return (
    <>
      
        <section>
        <Navbar />
      </section>
        <h1></h1>
        <main>
        <h1>Your cart</h1>
        
        <table className="cart">
          <tr>
            {cart.map((product, idx) => (
              <div key={idx}>
                <td className="timg">
                  <img src={product.image} alt={product.name} />
                </td>
                <td className="tdis">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p>{product.category}</p> 
                  <button onClick={() => removeCart(product)}>remove</button>
                 
                </td>
              </div>
            ))}
          </tr>
        </table>
        {cart.length > 0 && <button className="button3"  onClick={clearCart}>Clear Cart</button>}{" "}
        <div className="bottom">
          <p className="total">Total : ${getTotalsum()} </p>
          <button className="buttons button1"><Link to="/home">Continue Shopping</Link></button>
          <button  onClick={(clearHistory) => addToHistory() } className="buttons button2">Check Out</button>
          <p className="terms">
            By selecting ‘Check Out’ you are agreeing to our Terms & Conditions
          </p>
        </div>
      </main>
    </>
  );
}
