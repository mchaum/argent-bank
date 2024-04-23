import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
    'user/fetchUserData', 
    async (_, thunkAPI) => {
      try {
        // Récupération des données de l'utilisateur seulement s'il y a un token existant //
        const token = thunkAPI.getState().auth.token;
        console.log(`Bearer ${token}`);
      const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        return response.data.body;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

// Création d'une slice pour gérer l'état de l'utilisateur après connexion //
const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        error: null,
        isLoading: false,
      },
      reducers: {
        userData: (state, action) => {
            const { firstName, lastName, userName } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.userName = userName;
        },
        },

    extraReducers: builder => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          });
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        })
        builder.addCase(fetchUserData.rejected, (state) => {
            state.isLoading = false;
            state.error = action.payload.message;
        })
    }
})

export const { userData } = userSlice.actions;
export default userSlice.reducer;