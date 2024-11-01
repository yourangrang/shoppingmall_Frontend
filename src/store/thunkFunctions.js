import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from './../utils/axios';

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (body, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/register`,
                body
            )

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || 'error.message');
        }
    }
) //회원가입

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userData, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/login`,
                userData
            )

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || 'error.message');
        }
    }
)  //로그인

export const authUser = createAsyncThunk(
    "user/authUser",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.get(
                `/users/auth`
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
) //인증


export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, thunkAPI) => {
        try {
            const response = await axiosInstance.post(
                `/users/logout`
            );

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

// createAsyncThunk를 사용하여 registerUser라는 비동기 함수를 정의 
// 사용자 등록 요청을 비동기로 처리하는 역할