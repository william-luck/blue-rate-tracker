import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ingredientEdited } from "./ingredientsSlice"

export const fetchMenuItems = createAsyncThunk('menuItems/fetchMenuItems', async () => {
    return fetch('/menu_items')
        .then(r => r.json())
})

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

export const reassignMenu = createAsyncThunk('menuItems/reassignMenu', async (menuItem) => {
    const response = await fetch(`menu_items/${menuItem.item_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
    
    return response.json()
})

const menuItemsSlice = createSlice({
    name: 'menu_items',
    initialState: {
        entities: [],
        selectedItem: []
    },
    reducers: {
        ingredientSelected(state, action) {
            state.selectedItem = action.payload
        }, 
    }, 
    extraReducers: {
        [addMenuItem.fulfilled] (state, action) {
            state.entities.push(action.payload)
        },
        [fetchMenuItems.fulfilled] (state, action) {
            state.entities = action.payload
        }, 
        [ingredientEdited.fulfilled] (state, action) {
            // Edits ingredient in menuItem state
            // const menuItem = state.entities.find(item => item.id == action.payload.menu_item_id)
            // const ingredient2 = menuItem.ingredients.find(ingred => ingred.id === action.payload.id)
            // ingredient2.quantity = action.payload.quantity

            // Edits ingredient in selectedItem (to display on page)
            const ingredient = state.selectedItem.ingredients.find(ingred => ingred.id === action.payload.id)
            ingredient.quantity = action.payload.quantity
        },
        [reassignMenu.fulfilled] (state, action) {
            state.selectedItem.menu = action.payload.menu
        }
    
    }
})

export const { ingredientSelected } = menuItemsSlice.actions

export default menuItemsSlice.reducer