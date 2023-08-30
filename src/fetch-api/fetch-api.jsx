// import { render } from "@testing-library/react";

import { useEffect, useState } from "react";

async function fetchProducts() {
  const response = await fetch(
    "https://64ea220cbf99bdcc8e6757fe.mockapi.io/product"
  );

  const products = await response.json();
  console.log(products);
  return products;
}

function FetchData() {
  // let dataProducts;
  // console.log("Component Rerendered");
  let a = () => {};

  let [dataProducts, setdataProduct] = useState([]);

  if (!dataProducts.length) {
    fetchProducts().then((movies) => {
      // dataProducts = movies;
      setdataProduct(movies);
    });
  }

  return (
    <div>
      <h1>Faraz Liaquat</h1>
      {dataProducts?.map((product, index) => {
        return (
          <div key={index}>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <img src={product.image} />
            <hr />
          </div>
        );
      })}
    </div>
  );
}

// tell me ways of how to trigger re-render in a functional component to display changes in local variables

export default FetchData;

/*

  - understand how refrences work in react functional component
  - how re-rendering works in react FC | how it help us
  - how to use functions in vanillaJS properly and efficently
  - understand control flow
  - understand comparisions b/w different data types
  - life cycle hooks purpose componentDid(Mount/Unmount), componentDidUpdate, how to implement these in react FC

*/
