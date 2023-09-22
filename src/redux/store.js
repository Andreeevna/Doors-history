import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import productsSlice from './products/productsSlice'

export const store = configureStore({
	reducer: {
		products: productsSlice,
	},

	middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
	devTools: true,
})
