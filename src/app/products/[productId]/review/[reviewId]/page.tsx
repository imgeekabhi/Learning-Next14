import React from 'react'

const ProductReview = ({params}:{
    params:{productId:number,reviewId:number}
}) => {
  return (
    <div>ProductId {params.productId} ProductReview {params.reviewId}</div>
  )
}

export default ProductReview