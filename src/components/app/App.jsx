import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCollections } from '../../redux/collections/collectionsSlice'
import { productsFetch } from '../../redux/products/productsSlice'
import RouterApp from '../../routes/Router'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(productsFetch())
		dispatch(getCollections())
	}, [dispatch])
	return (
		<div className='app'>
			<div id='main' style={{ overflowY: 'hidden' }}>
				<Header />
				<RouterApp />
				<Footer />
			</div>
		</div>
	)
}

export default App
