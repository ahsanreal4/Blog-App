import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesData: []
}

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categoriesData = action.payload;
    }
  }
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
