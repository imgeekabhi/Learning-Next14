import React from 'react'

const ProductDetailPage = ({params}:{params:{productId:number}}) => {
  return (
    <div>product detail page {params.productId}</div>
  )
}

export default ProductDetailPage