import React, { useState } from 'react'
import { useDispatch,  } from 'react-redux';
import { addToCart } from '../../../store/thunkFunctions';

const size = [
    {key:1, value: "XS"},
    {key:2, value: "S"},
    {key:3, value: "M"},
    {key:4, value: "L"},
    {key:5, value: "XL"},
    {key:6, value: "XXL"},
  ]

const ProductInfo = ({product}) => {

    const [choSize, setChoSize] = useState(product.size || size[0].key);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setChoSize ((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    
    const dispatch = useDispatch();

    const handleClick = () => {
        // 선택한 사이즈와 함께 카트에 추가
        dispatch(addToCart({ productId: product._id, size: choSize }));
      };

    return (
        <div className='ml-2'>
            <ul>
                <li className='text-xl font-bold pt-4'><span>￦</span>{product.price}</li>
                <li className='mt-8'><span className='font-semibold text-gray-900'>판매 수 </span>{product.sold}개</li>
                <li className='mt-4 text-sm'><span className='text-[16px] block font-bold pb-2'>설명 </span>{product.description}</li>
                <div className='mt-10'>
                    <label htmlFor='size'>사이즈</label>
                    <select 
                    className='w-full px-4 py-2 bg-white border rounded-md'
                    name="size"  id="size" onChange={handleChange} value={choSize.size}
                    >
                    {size.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                    </select>
                </div>
            </ul>

            <div className='mt-3'>
                <button
                    onClick={handleClick}
                    className='w-full px-4 py-2 text-white bg-black hover:bg-gray-700 rounded-md'>
                    장바구니로
                </button>
            </div>
            
        </div>
    )
}

export default ProductInfo