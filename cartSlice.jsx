import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
       const findindex = state.cartItems.findIndex((item)=>item.id === action.payload.id)
       if(findindex >= 0){
        state.cartItems[findindex].quantity +=1;
       }else{
          let newentry = {...action.payload, quantity:1};
        //   state.cartItems.push(newentry);
        state.cartItems = [...state.cartItems, newentry]
       }
        },
        removeFromCart: (state, action) => {
            let findindex = state.cartItems.findIndex((item)=>item.id === action.payload.id);
            if(state.cartItems[findindex].quantity > 1){
                state.cartItems[findindex].quantity -=1;
            }
        },
        clearCart: (state, action) => {
            const data = state.cartItems.filter((x)=>x.id !== action.payload.id)
            state.cartItems = data
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

