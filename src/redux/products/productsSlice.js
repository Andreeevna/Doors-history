import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const initialState = {
	items: [],
	filtered: [],
	status: null,
}

export const productsFetch = createAsyncThunk(
	'products/productsFetch',
	async () => {
		try {
			const response = await axios.get(`${BASE_URL}/products`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByCollection: (state, action) => {
			const filter = state.items.filter(
				product => product.collection === action.payload
			)
			state.filtered = filter
			// console.log('filter', filter)
		},
	},
	extraReducers: {
		[productsFetch.pending]: (state, action) => {
			state.status = 'pending'
		},
		[productsFetch.fulfilled]: (state, action) => {
			state.items = action.payload
			state.status = 'success'
		},
		[productsFetch.rejected]: (state, action) => {
			state.status = 'rejected'
		},
	},
})

export const { filterByCollection } = productsSlice.actions

export default productsSlice.reducer
