import { configureStore } from '@reduxjs/toolkit'
import menusReducer from './menusSlice'



const store = configureStore({
  reducer: {
    menus: menusReducer,
  },
})

export default store;