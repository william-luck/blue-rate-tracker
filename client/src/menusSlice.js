import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ingredientEdited } from "./ingredientsSlice";

export const fetchMenus = createAsyncThunk('menus/fetchMenus', () => {
    // Promise returned
    return fetch('/menus')
        .then(response => response.json())
        .then(data => data)
})  

export const editMenuName = createAsyncThunk('menus/editMenuName', async (data) => {
    return fetch(`menus/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
})

export const addMenu = createAsyncThunk('menus/addMenu', async (name) => {
    return fetch('menus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    })
        .then(response => response.json())
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
        },
        [editMenuName.fulfilled](state, action) {
            const menu = state.entities.find(menu => menu.id === action.payload.id)
            menu.name = action.payload.name
        },
        [addMenu.fulfilled] (state, action) {
            state.entities.push(action.payload)
        }
    }
})

export default menusSlice.reducer;