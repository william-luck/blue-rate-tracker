import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './menusSlice'
import usersReducer from './usersSlice'
import productsReducer from './productsSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
    users: usersReducer,
    products: productsReducer,
  },
})

export default store;