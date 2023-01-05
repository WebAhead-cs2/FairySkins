import React from 'react'
import data from '/home/mohammad/proj_3/FairySkins/src/data.js'

export default function ProductList({addToCart}) {
    
    
  return (
  <>
  
     <div class = "container">  
 {
  data.map((product, idx) =>(
      <div class ="card" key={idx}>
      <h1>products</h1>
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
      <p>{product.category}</p>
      <img src={product.image} alt={product.name} />
      <button onClick= {() => addToCart(product)}>add</button>
      </div>
      ))}
      </div> 
      </>);
  
}
