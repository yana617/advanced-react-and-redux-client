import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3090';
export const signUp = createAsyncThunk('auth/signup', async (body) => {
  const response = await axios.post(`${url}/signup`, body);
  return response.data
})

export const signIn = createAsyncThunk('auth/signup', async (body) => {
  const response = await axios.post(`${url}/signin`, body);
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authenticated: localStorage.getItem('token'),
    errorMessage: '',
  },
  reducers: {
    signOut: (state, { payload }) => {
      state.authenticated = '';
      localStorage.removeItem('token');
    }
  },
  extraReducers: {
    [signUp.fulfilled]: (state, { payload }) => {
      state.authenticated = payload.token;
      localStorage.setItem('token', payload.token);
    },
    [signUp.rejected]: (state, { error }) => {
      state.errorMessage = error.message;
    },
  },
})

export const { signOut } = authSlice.actions

export default authSlice.reducer