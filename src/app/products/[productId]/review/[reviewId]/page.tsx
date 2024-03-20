import { count } from "console";
import React from "react";
import { notFound } from "next/navigation";
const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

const ProductReview = ({
  params,
}: {
  params: { productId: number; reviewId: number };
}) => {
  const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error(`Error Loading review`);
  // }
  if (params.reviewId > 1000) {
    notFound();
  }
  return (
    <div>
      ProductId {params.productId} ProductReview {params.reviewId}
    </div>
  );
};

export default ProductReview;
