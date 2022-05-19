import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  lastFiveCountries: [],

};
const to = new Date(new Date().getTime()).toISOString()
const from = new Date(new Date().getTime() - 5*24*3600000).toISOString()

export const getDataCountries = createAsyncThunk("covid/covidData", async () => {
  const response = await axios.get(
    "https://api.covid19api.com/countries"
  );
  localStorage.setItem("covidData", JSON.stringify(response.data));
  return response.data;
});
export const getDataFiveDays = createAsyncThunk("covid/covidDataFiveDays", async (country) => {
  const response = await axios.get(
    `https://api.covid19api.com/country/${country}?from=${from}&to=${to}`
  );
  return response.data;
});

export const covidSlice = createSlice({
  name: "covid",
  initialState,

  reducers: {
    
  },

  extraReducers: {
    [getDataCountries.pending]: (state) => {
      state.loading = true;
    },
    [getDataCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    },
    [getDataCountries.rejected]: (state) => {
      state.status = "error";
    },
    [getDataFiveDays.pending]: (state) => {
    },
    [getDataFiveDays.fulfilled]: (state, action) => {
      state.lastCountries = action.payload;
    },
    [getDataFiveDays.rejected]: (state) => {
      state.status = "error";
    },
  },
});

// export const { setFavoriteBookAction,deleteBookAction,deleteFavoritesBookAction,addBookAction,editBookAction } = bookSlice.actions;

export default covidSlice.reducer;
