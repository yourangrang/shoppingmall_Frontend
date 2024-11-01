import { createSlice } from "@reduxjs/toolkit"
import { logoutUser, loginUser, registerUser, authUser } from "./thunkFunctions";
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
    }
})

export default userSlice.reducer;

//Redux의 상태 관리를 위해 사용자 관련 상태를 다루는 슬라이스를 정의