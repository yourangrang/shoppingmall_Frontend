import { createSlice } from "@reduxjs/toolkit"
import { logoutUser, loginUser, registerUser, authUser, addToCart, getCartItems, removeCartItem, payProducts } from "./thunkFunctions";
import { toast } from "react-toastify";

const initialState = {
    userData: {
        id: '',
        email: '',
        name: '',
        role: 0,
        image: '',
    },
    isAuth: false,
    isLoading: false,
    error: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state)=>{
                state.isLoading = false;
                toast.info('회원가입을 성공했습니다.');
            })
            .addCase(registerUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // register

            .addCase(loginUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.userData = action.payload;
                state.isAuth = true;
                localStorage.setItem('accessToken', action.payload.accessToken);
            })
            .addCase(loginUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // login

            .addCase(authUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(authUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.userData = action.payload;
                state.isAuth = true;
            })
            .addCase(authUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                state.isAuth = false;
                localStorage.removeItem('accessToken');
            }) // auth

            .addCase(logoutUser.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.userData = initialState.userData;
                state.isAuth = false;
                localStorage.removeItem('accessToken');
            })
            .addCase(logoutUser.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // logoutUser


            .addCase(addToCart.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(addToCart.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.userData.cart = action.payload;
                toast.info('장바구니에 추가되었습니다.')
            })
            .addCase(addToCart.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error('로그인해주세요');  
            }) // cart  //토스트에action.payload, 


            .addCase(getCartItems.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.cartDetail = action.payload;
            })
            .addCase(getCartItems.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // getcartitem


            .addCase(removeCartItem.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(removeCartItem.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.cartDetail = action.payload.productInfo;
                state.userData.cart = action.payload.cart;
                toast.info('상품이 장바구니에서 제거되었습니다.');
            })
            .addCase(removeCartItem.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // removeCartItem


            .addCase(payProducts.pending, (state)=>{
                state.isLoading = true;
            })
            .addCase(payProducts.fulfilled, (state, action)=>{
                state.isLoading = false;
                state.cartDetail = [];
                state.userData.cart = [];
                toast.info('성공적으로 상품을 구매했습니다.');
            })
            .addCase(payProducts.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload;
                toast.error(action.payload);
            }) // payProducts
    }
})

export default userSlice.reducer;

//Redux의 상태 관리를 위해 사용자 관련 상태를 다루는 슬라이스를 정의