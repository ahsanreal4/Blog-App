import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/userSlice"
import categoriesReducer from "./features/categoriesSlice"
export const store = configureStore({
  reducer: 
  {
    users:userReducer,
    categories:categoriesReducer

  },

})