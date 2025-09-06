import React   from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useContext } from 'react';
import ProducrDisplay from '../Components/ProductDisplay/ProducrDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

const Product = () => {
  const {all_procuct}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_procuct.find((e)=>e.id === Number (productId))

  return (
    <div>
      <Breadcrum product = {product}/>
      <ProducrDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
