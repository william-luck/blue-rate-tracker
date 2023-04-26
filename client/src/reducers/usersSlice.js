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
    const response = await fetch('/logout', {method: 'DELETE'})

    return response 
})

export const checkLogin = createAsyncThunk('users/fetchUser', async() => {
    const response = await fetch('/me')
    
    return response.json()
})

const sessionsSlice = createSlice({
    name: 'users',
    initialState: {
        entities: [], 
        errors: []
    },
    reducers: {
        
    }, 
    extraReducers: {
        [addSession.fulfilled] (state, action) {
            if (!action.payload.id) {
                state.errors = action.payload.errors
            } else {
                state.entities.push(action.payload)
                state.errors = []
            }
        },
        [removeSession.fulfilled] (state) {
            state.entities = []
        },
        [checkLogin.fulfilled] (state, action) {
            if (action.payload.id) {
                state.entities.push(action.payload)
            }
        }
    }
})

export default sessionsSlice.reducer