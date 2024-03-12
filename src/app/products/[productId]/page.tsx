import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return { title: `Product ${params.productId}` };
};

const ProductDetailPage = ({ params }: Props) => {
  return <div>product detail page {params.productId}</div>;
};

export default ProductDetailPage;
