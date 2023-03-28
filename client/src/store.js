import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './menusSlice'
import usersReducer from './usersSlice'
import productsReducer from './productsSlice'
import ingredientsReducer from './ingredientsSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
    users: usersReducer,
    products: productsReducer,
    ingredientsSelected: ingredientsReducer,
  },
})

export default store;