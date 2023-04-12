import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { addMenuItem } from "./menuItemsSlice"


export const ingredientEdited = createAsyncThunk('ingredients/ingredientEdited', async(ingredient) => {

    return fetch (`ingredients/${ingredient.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(ingredient)
    })
        .then(response => response.json())
        .then(data => data)
})

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        entities: [],
        menu: '', 
        name: ''
    },
    reducers: {
        ingredientAdded(state, action) {
            state.entities.push(action.payload)
        }, 
        ingredientRemoved(state, action) {
            const index = state.entities.findIndex(ingredient => ingredient.product_id === action.payload)
            state.entities.splice(index, 1)
        },
        assignMenu(state, action) {
            state.menu = action.payload
        }, 
        assignName(state, action) {
            state.name = action.payload
        },
        assignQuantity(state, action) {
            const ingredient = state.entities.find(ingredient => ingredient.product_id === action.payload.id)
            ingredient.quantity = action.payload.quantity
        },
        clearPendingData(state) {
            state.entities = []
            state.menu = ''
            state.name = ''
        }
    }, 
    extraReducers: {
        // [addMenuItem.fulfilled] (state) {
        //     debugger
        //     state.entities = ''
        //     state.menu = ''
        //     state.name = ''
        // }
        }
    }
)

export const {ingredientAdded, ingredientRemoved, assignMenu, assignName, assignQuantity, clearPendingData } = ingredientsSlice.actions;

export default ingredientsSlice.reducer