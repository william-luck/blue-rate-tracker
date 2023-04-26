import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './reducers/menusSlice'
import usersReducer from './reducers/usersSlice'
import productsReducer from './reducers/productsSlice'
import ingredientsReducer from './reducers/ingredientsSlice'
import menuItemsReducer from './reducers/menuItemsSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
    users: usersReducer,
    products: productsReducer,
    menuItems: menuItemsReducer,
    ingredientsSelected: ingredientsReducer,
  },
})

export default store;