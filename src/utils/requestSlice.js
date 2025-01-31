import { createSlice } from "@reduxjs/toolkit"
const requestSlice = createSlice({
    name:"Requests",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>action.payload,
        removeRequests:(state,action)=>{
            const removeFeed = state.filter((r)=>r._id !== action.payload);
            return removeFeed;
        }
    }
});
export const{addRequests,removeRequests} = requestSlice.actions;
export default requestSlice.reducer;