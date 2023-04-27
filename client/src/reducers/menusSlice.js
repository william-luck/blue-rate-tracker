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

export const deleteMenu = createAsyncThunk('menus/deleteMenu', async (id) => {
    const response = await fetch(`menus/${id}`, {
        method: 'DELETE'
    })
    
    return response.json()
})

const menusSlice = createSlice({
    name: 'menus',
    initialState: {
        entities: [],
        selected: '',
        nameErrors: '',
        addingErrors: '',
        status: 'idle'
    },
    reducers: {
        menuSelected(state, action) {
            state.selected = action.payload
        }
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

            state.nameErrors = ''

            if (action.payload.errors) {
                state.nameErrors = action.payload.errors[0]
            } else {
                const menu = state.entities.find(menu => menu.id === action.payload.id)
                menu.name = action.payload.name
            }

           
        },
        [addMenu.fulfilled] (state, action) {
            state.addingErrors = ''

            debugger

            if (action.payload.errors) {
                state.addingErrors = action.payload.errors[0]
            } else {
                state.entities.push(action.payload)
            }
            
        },
        [deleteMenu.fulfilled] (state, action) {
            const index = state.entities.findIndex(menu => menu.id === action.payload.id)
            state.entities.splice(index, 1)
        }
    }
})

export const { menuSelected } = menusSlice.actions

export default menusSlice.reducer;