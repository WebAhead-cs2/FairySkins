import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Navbar from "../components/navbar";

export default function ComponentCart() {
  const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromStorage);

  const removeCart = (productToremove) => {
    setCart(cart.filter((product) => product !== productToremove));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const clearCart = () => {
  //   setCart([]);
  // };

  // const getTotalsum = () => {
  //   return cart.reduce((sum, { price }) => sum + price, 0);
  // };

  return (
    <>
      <main>
        {/* <section>
        <Navbar />
      </section> */}
        <h1></h1>
        <h1>Your cart</h1>
        <Link to="/home">Products</Link>
        <table className="cart">
          <tr>
            {cart.map((product, idx) => (
              <div key={idx}>
                <td className="timg">
                  <img src={product.image} alt={product.name} />
                </td>
                <td className="tdis">
                  {product.name}${product.price}
                  {product.category}
                  <button onClick={() => removeCart(product)}>remove</button>
                </td>
              </div>
            ))}
          </tr>
        </table>
        {/* {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}{" "} */}
        <div className="bottom">
          <p className="total">Total : </p>
          <button className="buttons button1">Continue Shopping</button>
          <button className="buttons button2">Check Out</button>
          <p className="terms">
            By selecting ‘Check Out’ you are agreeing to our Terms & Conditions
          </p>
        </div>
      </main>
    </>
  );
}
