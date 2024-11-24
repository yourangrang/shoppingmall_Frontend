import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../../../components/ImageSlider';

const cloth = [
    {key: 1, value: "자켓"},
    {key: 2, value: "상의"},
    {key: 3, value: "드레스"},
    {key: 4, value: "팬츠"},
    {key: 5, value: "스커트"},
    {key: 6, value: "신발"},
];

const CardItem = ({ product }) => {
    const clothItem = cloth.find(item => item.key === product.clothings);

    return (
        <div>
            <ImageSlider images={product.images} />
            <Link to={`/product/${product._id}`} >
                <p className='pl-3 font-bold'>{product.title}</p>
                <p className='pl-3 text-[14px]'>￦{product.price}</p>
                <p className='pl-3 text-xs font-bold text-gray-400'>{clothItem ? clothItem.value : 'Unknown'}</p>
            </Link>
        </div>
    );
}

export default CardItem;
