import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../cart/cart.css";
import Navbar from "../components/navbar";

export default function History() {
    const historyFromStorage = JSON.parse(localStorage.getItem("history") || "[]");
    const [history, setHistory] = useState(historyFromStorage);
  return (
  <>
    <section>
    <Navbar />
  </section>
    <h1></h1>
    <main>
    <h1>Your History</h1>
    
    <table className="cart">
      <tr>
        {history.map((product, idx) => (
          <div key={idx}>
            <td className="timg">
              <img src={product.image} alt={product.name} />
            </td>
            <td className="tdis">
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{product.category}</p> 
            </td>
          </div>
         ))} 
      </tr>
    </table>
  </main>
</>
  )
}
