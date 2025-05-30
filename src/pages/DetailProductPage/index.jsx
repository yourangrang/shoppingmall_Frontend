import React, { useEffect, useState } from 'react'
import { useParams }from 'react-router-dom'
import axiosInstance from './../../utils/axios';
import ProductInfo from './Sections/ProductInfo';
import ProductImage from './Sections/ProductImage';

const DetailProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
      async function fetchProduct() {
        try {
          const response = await axiosInstance.get(`/products/${productId}?type=single`);
          console.log(response);
          setProduct(response.data[0]);
        } catch (error) {
          console.error(error);
        }
      }
      fetchProduct();
    }, [productId])

    if(!product) return null;

    return (
        <section>
            <div className='flex gap-4'>
                <div className='w-1/2'>
                    {/* ProductImage */}
                    <ProductImage product={product} />
                </div>
                <div className='w-1/2'>
                    {/* ProductInfo */}
                  <div className='text-center p-4 text-2xl'>
                      {product.title}
                  </div>
                    <ProductInfo product={product} />
                </div>
            </div>
        </section>
    )
}

export default DetailProductPage