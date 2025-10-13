import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const ProductSlices = createSlice({
  name: 'value',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { ProductReducer } = ProductSlices.actions

export default ProductSlices.reducer