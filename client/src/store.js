import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './menusSlice'
import usersReducer from './usersSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
    users: usersReducer,
  },
})

export default store;