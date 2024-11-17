import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../store/thunkFunctions';

const CartPage = () => {

    const userData = useSelector(state => state.user?.userData);
    const cartDetail = useSelector(state => state.user?.cartDetail);

    const dispatch = useDispatch();

    const [ total, setTotal ] = useState(0);

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

    //카트디테일이 변할때마다 총합계 구하기
    useEffect(()=> {
        calculateTotal(cartDetail)
    }, [cartDetail])


    const calculateTotal = (cartItems) => {
        let total = 0;
        cartItems.map(item => total += item.price * item.quantity)
        setTotal(total)

    }

    return (
        <section>
            <div className='text-center m-7'>
                <h2 className='text-2xl'>나의 장바구니</h2>
            </div>

            {cartDetail?.length > 0 ?
            <>
                <div>
                    <p><span>합계:{total} </span> 원</p>
                    <button className='px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500'>
                        결제하기
                    </button>
                </div>
            </>
            :
            <p>장바구니가 비었습니다.</p>
            }
        </section>
    )
}

export default CartPage