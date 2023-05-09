import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        cartList: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.cartList.push(action.payload)
        },
        removeProduct: (state, action) => {
            // state.value += action.payload
        },
        updateQuantity: (state, action) => {
            // state.value += action.payload
        },
    },
})

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions

export const cartList = (state) => state.cart.cartList

export default cartSlice.reducer
