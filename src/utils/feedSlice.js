import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
           const removeFeed = state.filter((user)=>user._id !== action.payload) ;
           return removeFeed;
        }
    }
});
export const {addFeed,removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;