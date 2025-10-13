import { configureStore } from '@reduxjs/toolkit'
import { ProductSlices } from './ProductSlices/ProductSlices'

export const store = configureStore({
  reducer: {
    allProducts : ProductSlices.reducer
  },
})