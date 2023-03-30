import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './menusSlice'
import usersReducer from './usersSlice'
import productsReducer from './productsSlice'
import ingredientsReducer from './ingredientsSlice'
import menuItemsReducer from './menuItemsSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
    users: usersReducer,
    products: productsReducer,
    ingredientsSelected: ingredientsReducer,
    menuItems: menuItemsReducer
  },
})

export default store;