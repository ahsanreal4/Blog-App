import { createSlice } from "@reduxjs/toolkit";
const initialState={
    categoriesData:[]
}

export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        addCategories: (actions,state) =>{
                state.categoriesData= actions.payload
        }
    }

})

export const {addCategories} =categoriesSlice.actions
export default categoriesSlice.reducer