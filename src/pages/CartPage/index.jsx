import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, payProducts, removeCartItem } from '../../store/thunkFunctions';
import CartTable from './Sections/CartTable';

const CartPage = () => {
    const userData = useSelector(state => state.user?.userData);
    const cartDetail = useSelector(state => state.user?.cartDetail);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let cartItemIds = []

        if (userData?.cart && userData.cart.length > 0) {
        userData.cart.forEach(item => {
            cartItemIds.push(item.id);
        })

        const body = {
            cartItemIds,
            userCart: userData.cart
        }

        dispatch(getCartItems(body))
        }

    }, [dispatch, userData])

    useEffect(() => {

        calculateTotal(cartDetail)

    }, [cartDetail])


    const calculateTotal = (cartItems) => {
        let total = 0;
        cartItems.map(item => total += item.price * item.quantity)
        setTotal(total);
    }

    const handleRemoveCartItem = (productId) => {
        dispatch(removeCartItem(productId));
    }
    
    const handlePaymentClick = () => {
        dispatch(payProducts({cartDetail: cartDetail}))
    }


    return (
        <section>
            <div className='text-center m-10'>
                <h2 className='text-2xl '>쇼핑백</h2>
                <p className='text-xs pt-5'>회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</p>
            </div>

            {cartDetail?.length > 0 ?
            <div className='sm:flex gap-5'>

                <CartTable products={cartDetail} onRemoveItem={handleRemoveCartItem} className='w-3/5  ' />
                <div className='w-full  sm:w-2/5 mb-5 bg-white p-4 sm:text-right sm:h-[250px] '>
                    <p className='text-xs text-left pb-3'>
                        귀하가 결제 단계에 도달할 때까지 가격 및 배송료는 확인되지 않습니다.
                        30일의 반품 가능 기간, 반품 수수료 및 미수취시 발생하는 추가 배송 요금 읽어보기
                        <span className='font-bold text-left'> 반품 및 환불 </span>
                    </p>
                    <p className='border-t-2 border-black pt-3 font-bold'>합계: <span className='font-medium text-2xl'>{total}</span> 원</p>
                    <button
                    className='px-4 py-2 mt-5 text-white bg-black  hover:bg-gray-500'
                    onClick={handlePaymentClick}
                    >
                    결제하기
                    </button>
                </div>
            </div>
            :
            <p>장바구니가 비었습니다.</p>
            }
        </section>
    )
}

export default CartPage