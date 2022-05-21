import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  lastFiveDaysCountries: [],
  loading: false,
  selectedCountry: localStorage.getItem("selectedCountry")
    ? localStorage.getItem("selectedCountry")
    : "kyrgyzstan", 
};  

const to = new Date(new Date().getTime()).toISOString().slice(0, 10);   // today's date
const from = new Date(new Date().getTime() - 5 * 24 * 3600000).toISOString();   // 5 days ago

export const getDataCountries = createAsyncThunk(
  "covid/covidData",
  async () => {
    const response = await axios.get("https://api.covid19api.com/countries");
    localStorage.setItem("covidData", JSON.stringify(response.data));
    return response.data;
  }
);  // get countries data
export const getDataFiveDays = createAsyncThunk(
  "covid/covidDataFiveDays",
  async (country) => {
    const response = await axios.get(
      `https://api.covid19api.com/country/${country}?from=${from}&to=${to}`
    );
    return response.data;
  }
);  // get data for last 5 days

export const covidSlice = createSlice({
  name: "covid",
  initialState,

  reducers: {
    selectCountry: (state, action) => {
      state.selectedCountry = action.payload;
      localStorage.setItem("selectedCountry", action.payload);
    },
  },  // select country

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
      state.loading = true;
    },
    [getDataFiveDays.fulfilled]: (state, action) => {
      state.lastFiveDaysCountries = action.payload;
      console.log(action.payload)
      state.loading = false;
    },
    [getDataFiveDays.rejected]: (state) => {
      state.status = "error";
    },
  },
});

export const { selectCountry } = covidSlice.actions;

export default covidSlice.reducer;
