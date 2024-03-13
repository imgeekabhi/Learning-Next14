"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    alert("placing order successfully  ");
    router.push("/");
  };
  return (
    <div>
      <h2>OrderProduct</h2>
      <button onClick={handlePlaceOrder}>Place order</button>
    </div>
  );
};

export default OrderProduct;
