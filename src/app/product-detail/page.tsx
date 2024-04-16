import { Suspense } from "react";

import { Review } from "../Components/Review/page";
import { Product } from "../Components/Product/page";
export default function ProductDetailPage() {
  return (
    <div>
      <h1>Product detail page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Review />
      </Suspense>
    </div>
  );
}
