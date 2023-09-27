import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { productsFetch } from '../../redux/products/productsSlice'
import RouterApp from '../../routes/Router'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const App = () => {
	const location = useLocation()
	console.log(location)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(productsFetch())
	}, [])
	return (
		<div className='app'>
			<Header />
			<RouterApp />
			<Footer />
		</div>
	)
}

export default App
