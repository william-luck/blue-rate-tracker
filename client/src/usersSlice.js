import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const addSession = createAsyncThunk('sessions/addSession', async (formData) => {
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    return response.json()
})

export const removeSession = createAsyncThunk('sessions/removeSession', async () => {
    fetch('/logout', {method: 'DELETE'})
})

const sessionsSlice = createSlice({
    name: 'users',
    initialState: {
        entities: [], 
        errors: []
    },
    reducers: {
        // Blank for now
        // Add, logout? Async?
    }, 
    extraReducers: {
        [addSession.fulfilled] (state, action) {
            if (!action.payload.id) {
                state.errors.push(action.payload.errors)
            } else {
                state.entities.push(action.payload)
                state.errors = []
            }
        },
        [removeSession.fulfilled] (state) {
            state.entities = []
        }
    }
})

export default sessionsSlice.reducer