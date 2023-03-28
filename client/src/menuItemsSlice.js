import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const addMenuItem = createAsyncThunk('menuItems/AddMenuItem', async (data) => {
    const response = await fetch('/menu_items', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data)
    })

    return response.json()
})

const menuItemsSlice = createSlice({
    name: 'new_menu_items',
    initialState: {
        entities: []
    },
    reducers: {
        // Blank for now
        // Add, logout? Async?
    }, 
    extraReducers: {
        // [addSession.fulfilled] (state, action) {
        //     if (!action.payload.id) {
        //         state.errors = action.payload.errors
        //     } else {
        //         state.entities.push(action.payload)
        //         state.errors = []
        //     }
        // },
        [addMenuItem.fulfilled] (state, action) {
            state.entities = []
            state.entities.push(action.payload)
        }
    
    }
})

export default menuItemsSlice.reducer