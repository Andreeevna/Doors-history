import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'

export const store = configureStore({
	reducer: {},

	middleware: getMiddleware => getMiddleware().concat(apiSlice.middleware),
	devTools: true,
})
