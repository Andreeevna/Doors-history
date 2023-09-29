import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { BASE_URL } from '../../utils/constants'

const initialState = {
	list: [],
	isLoading: false,
}

export const getCollections = createAsyncThunk(
	'collections/getCollections',
	async (_, thunkAPI) => {
		try {
			const res = await axios(`${BASE_URL}/collections`)
			return res.data
		} catch (err) {
			console.log(err)
			return thunkAPI.rejectWithValue(err)
		}
	}
)

const collectionsSlice = createSlice({
	name: 'collections',
	initialState,
	extraReducers: builder => {
		builder.addCase(getCategories.pending, state => {
			state.isLoading = true
		})
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.list = action.payload
			state.isLoading = false
		})
		builder.addCase(getCategories.rejected, state => {
			state.isLoading = false
		})
	},
})

export default collectionsSlice.reducer
