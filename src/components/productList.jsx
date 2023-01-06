import React from "react";
import data from "/home/mohammad/proj_3/FairySkins/src/data.js";

export default function ProductList({ addToCart, priceFilter, catFilter }) {
  const [minPrice, maxPrice] = priceFilter;

  return (
    <>
      <div className="container">
        {data
          .filter((item) => catFilter === "all" || catFilter === item.category)
          // .filter(
          //   (item) =>
          //     Number(item.price.substring(1)) >= minPrice &&
          //     Number(item.price.substring(1)) <= maxPrice
          // )
          .map((product, idx) => (
            <div class="card" key={idx}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <p>{product.category}</p>
              <button onClick={() => addToCart(product)}>add</button>
            </div>
          ))}
      </div>
    </>
  );
}
