import React from 'react'
import { GoTrash } from "react-icons/go";

const sizestring = [
  {key:1, value: "XS"},
  {key:2, value: "S"},
  {key:3, value: "M"},
  {key:4, value: "L"},
  {key:5, value: "XL"},
  {key:6, value: "XXL"},
]

const CartTable = ({ products, onRemoveItem }) => {
    ///이미지가 있으면 서버에서 PRODUCT.IMAGES의 첫번째를 가져와라
    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `${import.meta.env.VITE_SERVER_URL}/${image}`
        }
    }
    
    
    const renderItems = products.map(product => {
        // 각 product에 대해 사이즈를 찾음
        const sizestringItem = sizestring.find(item => item.key === product.size);
        return (
            <tr key={product._id} className='bg-white mb-3 w-full inline-table'>
                <td className='w-[100px] p-3'>
                    <img className='w-[100px]' alt='product' 
                         src={renderCartImage(product.images)} />
                </td>
                <td className='text-xs sm:text-[16px] font-bold text-center '>
                    {product.title}
                </td>
                <td className='text-center'>
                    {product.quantity} 개
                </td>
                <td >
                  {sizestringItem ? sizestringItem.value : 'Unknown'} size
                </td>
                <td>
                    {product.price} 원
                </td>
                <td>
                    <button onClick={() => onRemoveItem(product._id)}>
                        <GoTrash className='text-2xl'/>
                    </button>
                </td>
            </tr>
        )
    });



    return (
        <table  className='w-full text-sm '>
            <tbody className=''>
                {renderItems}
            </tbody>
        </table>
    )
}

export default CartTable