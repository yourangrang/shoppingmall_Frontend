import React from 'react'

const CartTable = ({ products, onRemoveItem }) => {
    ///이미지가 있으면 서버에서 PRODUCT.IMAGES의 첫번째를 가져와라
    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `${import.meta.env.VITE_SERVER_URL}/${image}`
        }
    }


    const renderItems = (
        products.length > 0 && products.map(product => (
            <tr key={product._id} className='bg-white mb-3 w-full inline-table'>
                <td className='w-[100px] p-3'>
                    <img className='w-[100px]' alt='product' 
                         src={renderCartImage(product.images)} />
                </td>
                <td className='text-[18px]'>
                    {product.title}
                </td>
                <td>
                    {product.quantity} 개
                </td>
                <td>
                    사이즈 {product.size} 
                </td>
                <td>
                    {product.price} 원
                </td>
                <td>
                    <button onClick={() => onRemoveItem(product._id)}>
                        지우기
                    </button>
                </td>
            </tr>
        ))
    )



    return (
        <table  className='w-full text-sm '>
            

            <tbody className=''>
                {renderItems}
            </tbody>
        </table>
    )
}

export default CartTable