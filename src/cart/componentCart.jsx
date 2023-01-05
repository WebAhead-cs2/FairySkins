import React from 'react'

export default function ComponentCart({cart,removeCart}) {
  return (
    <>
      <h1>carttttttttttttttt</h1>   
            {cart.map((product, idx) =>(
                <div class ="card" key={idx}>
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <p>{product.category}</p>
                <img src={product.image} alt={product.name} />
                <button onClick= {() => removeCart(product)}>remove</button>
                </div>
                ))}
                
                </>
  )
}
