import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import cartReducer from './reducers/cart';

export default configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
    },
});
