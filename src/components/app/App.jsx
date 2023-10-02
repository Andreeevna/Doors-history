import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCollections } from '../../redux/collections/collectionsSlice'
import { productsFetch } from '../../redux/products/productsSlice'
import Header from '../header/Header'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(productsFetch())
		dispatch(getCollections())
	}, [dispatch])
	return (
		<div className='app'>
			<Header />
			{/* <RouterApp />
			<Footer /> */}
		</div>
	)
}

export default App
