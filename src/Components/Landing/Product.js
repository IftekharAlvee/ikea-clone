import React from "react";
import ProductCard from "./ProductCard";

const Product = (props) => {
    const productData = props.productData;
    // console.log(productData);
    
  return (
    <div class="container">
      <div class="row row-cols-1 row-cols-md-4 g-4">
          {
              productData?.map(product => <ProductCard product={product}></ProductCard> )
          }
      </div>
    </div>
  );
};

export default Product;
