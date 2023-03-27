import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const addUser = createAsyncThunk('users/addUser', async (formData) => {
    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    return response.json()


    
    // .then(response => {
    //     if (response.ok) {
    //         response.json().then(data => data)
    //     } else {
    //         console.log('username or password incorrect')
    //     }

    //     // How can I then get that data sent to extraReducer?
    // })
})

const usersSlice = createSlice({
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
        [addUser.fulfilled] (state, action) {
            // debugger
            if (!action.payload.id) {
                state.errors.push(action.payload.errors)
            } else {
                state.entities.push(action.payload)
            }
        }
    }
})

export default usersSlice.reducer