import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

export const groceriesSlice = createSlice({
    name: 'groceries',
    initialState,
    reducers: {
        addGrocery: (state, action) => {
            return { value: [...state.value, action.payload] }
        },
        removeGrocery: (state, action) => {
            let list = [...state.value];
            list.splice(action.payload, 1);
            return { value: list }
        }
    }
})

export const { addGrocery, removeGrocery } = groceriesSlice.actions

export default groceriesSlice.reducer
