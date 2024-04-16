import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: undefined,
    isLoading: false,
}

export const logIn = createAsyncThunk(
    'auth/login', 
    async(userData) => {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/login", {
                email: email,
                password: password,
              });
              const token = response.data.body.token;
            localStorage.setItem('token', token)
            return response.data.user;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.data.errors);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(logIn.pending, (state)=> {
            state.isLoading = true;
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        })
        builder.addCase(logIn.rejected, (state) => {
            state.isLoading = false;
        })
    }
})

export default authSlice.reducer;