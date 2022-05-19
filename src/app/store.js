import { configureStore } from '@reduxjs/toolkit';
import covidSliceReducer from '../features/slice/covidSlice';

export const store = configureStore({
  reducer: {
    covid: covidSliceReducer,
  },
});
