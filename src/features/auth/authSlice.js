import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk(
    'auth/login', 
    async({email, password, rememberMe}, thunkAPI) => {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/login", {
                email: email,
                password: password,
              });
              // Récupération du token de connexion depuis la réponse //
              const token = response.data.body.token;
              // Stockage du token dans le localStorage du navigateur et on le retourne //
              if (rememberMe) {
                localStorage.setItem('token', token);
              } else {
                sessionStorage.setItem('token', token);
              }
        
              return token;
    } catch (error) {
        // En cas d'erreur, rejet + message d'erreur de l'API //
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})

// Création d'une slice pour gérer l'état de l'authentification //
const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoading: false,
        token: localStorage.getItem('token') || sessionStorage.getItem('token') || null, 
        error: null,
      },
      // Reducers pour gérer les changements d'état //
      reducers: {
        logOut(state) {
          state.isLoading = false;
          state.token = null;
          state.error = null;
        },
      },

    extraReducers: builder => {
        builder.addCase(logIn.pending, (state)=> {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.token = action.payload; // Stockage du token dans l'état //
        })
        builder.addCase(logIn.rejected, (state, action) => {
            state.isLoading = false;
            state.token = null;
            state.error = action.payload; // Ajout du stockage du message d'erreur //
        })
    }
})

export const { logOut } = authSlice.actions;
export default authSlice.reducer;