import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMenus = createAsyncThunk('menus/fetchMenus', () => {
    // Promise returned
    return fetch('/menus')
        .then(response => response.json())
        .then(data => data)
})      

const menusSlice = createSlice({
    name: 'menus',
    initialState: {
        entities: [],
        status: 'idle'
    },
    reducers: {
        // menuAdded
        // menuUpdated
        // menuRemoved
    },
    extraReducers: {
        // While loading menus
        [fetchMenus.pending](state) {
            state.status = 'loading'
        },
        // After menus received from server
        [fetchMenus.fulfilled](state, action) {
            state.entities = action.payload
            state.status = 'idle'
        }
    }
})

export default menusSlice.reducer;