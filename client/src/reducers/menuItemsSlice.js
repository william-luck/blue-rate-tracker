import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteIngredient, ingredientEdited } from "./ingredientsSlice"
import { newIngredient } from "./ingredientsSlice"

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
    const response = await fetch(`/menu_items/${menuItem.item_id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
    })
    
    return response.json()
})

export const deleteItem = createAsyncThunk('menuItems/deleteItem', async (id) => {
    const response = await fetch(`/menu_items/${id}`, {
        method: 'DELETE'
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
            // state.entities edit (for persisting change when different menu item is selected)
            const menuItem = state.entities.find(item => item.id === action.payload.menu_item_id)
            let menuItemIngredient = menuItem.ingredients.find(ingred => ingred.id === action.payload.id)
            menuItemIngredient.quantity = action.payload.quantity
            menuItemIngredient.price_of_ingredient = action.payload.quantity * action.payload.product.price

            // state.selectedItem edit (for displaying immediatley on page)
            let ingredient = state.selectedItem.ingredients.find(ingred => ingred.id === action.payload.id)
            ingredient.quantity = action.payload.quantity
            ingredient.price_of_ingredient = action.payload.quantity * action.payload.product.price
        },
        [editItem.fulfilled] (state, action) {
            // For immediately displaying on page
            state.selectedItem.menu = action.payload.menu
            state.selectedItem.name = action.payload.name
            state.selectedItem.price_ratio = action.payload.price_ratio

            // For updating title in dropdown menu and persisting changes across menu item selection
            state.entities.find(item => item.id === action.payload.id).name = action.payload.name

        },
        [deleteItem.fulfilled] (state, action) {
            // Need to find index of deleted item, splice that from array (mutable)
            const index = state.entities.findIndex(menuItem => menuItem.id === action.payload.id)
            state.entities.splice(index, 1)
            state.selectedItem = []
        },
        [newIngredient.fulfilled] (state, action) {

            // On selected item, immediate update
           state.selectedItem.ingredients.push(action.payload);

        //    Edge case of updating quantity after adding 
            const menuItem = state.entities.find(item => item.id == action.payload.menu_item.id);
            menuItem.ingredients.push(action.payload);
        },
        [deleteIngredient.fulfilled] (state, action) {

            // Immediate update
            const index = state.selectedItem.ingredients.findIndex(ingred => ingred.id == action.payload.id)
            state.selectedItem.ingredients.splice(index, 1)
            
        }
    
    }
})

export const { ingredientSelected } = menuItemsSlice.actions

export default menuItemsSlice.reducer