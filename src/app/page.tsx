import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Welcome to the Home page</h1>
      <ul>
        <li>
          <Link href={`/blog`}>Blog</Link>
        </li>
        <li>
          <Link href={`/products`}>Products</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
