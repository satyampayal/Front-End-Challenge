import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const showAllCountries= createAsyncThunk("cuntries/showAll",async(_,thunkAPI)=>{
  try{
    const response= await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  }
  catch(err){
    const message=(err.message && err.response.data) || err.message;
       
    // reject with value send the message error as payload
    return thunkAPI.rejectWithValue(message);
  }
}
)