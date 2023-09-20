import React from 'react'

import RouterApp from '../../routes/Router'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<RouterApp />
			<Footer />
		</div>
	)
}

export default App
