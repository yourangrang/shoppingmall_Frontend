import React from 'react'
import { Link } from 'react-router-dom';
import ImageSlider from '../../../components/ImageSlider';

const CardItem = ({ product }) => {
    return (
        <div className='border-[1px] border-gray-300'>
            <Link to={`/product/${product._id}`}>
                <ImageSlider images={product.images} />
                <p className='p-1'>{product.title}</p>
                <p className='p-1'>{product.size}</p>
                <p className='p-1'>{product.clothing}</p>
                <p className='p-1 text-xs text-gray-500'>{product.price}</p>
            </Link>
        </div>
    )
}

export default CardItem