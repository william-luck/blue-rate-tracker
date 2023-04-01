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

export const editItem = createAsyncThunk('menuItems/editItem', async (menuItem) => {
    const response = await fetch(`menu_items/${menuItem.item_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
    
    return response.json()
})

// export const editName = createAsyncThunk('menuItems/editName', as)

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
            // state.entities edit (for persisting change when different menu item is selected)
            const menuItem = state.entities.find(item => item.id === action.payload.menu_item_id)
            const menuItemIngredient = menuItem.ingredients.find(ingred => ingred.id === action.payload.id)
            menuItemIngredient.quantity = action.payload.quantity

            // state.selectedItem edit (for displaying immediatley on page)
            const ingredient = state.selectedItem.ingredients.find(ingred => ingred.id === action.payload.id)
            ingredient.quantity = action.payload.quantity
        },
        [editItem.fulfilled] (state, action) {
            // For immediately displaying on page
            state.selectedItem.menu = action.payload.menu
            state.selectedItem.name = action.payload.name
            state.selectedItem.price_ratio = action.payload.price_ratio

            // For updating title in dropdown menu and persisting changes across menu item selection
            state.entities.find(item => item.id === action.payload.id).name = action.payload.name
        }
    
    }
})

export const { ingredientSelected } = menuItemsSlice.actions

export default menuItemsSlice.reducer