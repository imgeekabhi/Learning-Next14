import React from "react";
import Link from "next/link";
const Products = () => {
  const productId = 300;
  return (
    <div>
      <h2>Products</h2>
      <Link href={`/`}>Home</Link>
      <ul>
        <li>
          <Link href={`/products/1`}> Product - 1</Link>
        </li>
        <li>
          <Link href={`/products/2`}> Product - 2</Link>
        </li>{" "}
        <li>
          <Link href={`/products/3`}> Product - 3</Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}> Product - {productId}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
