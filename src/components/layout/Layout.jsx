import React from 'react'

import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			{children && <div>{children}</div>}
			<Footer />
		</div>
	)
}

export default Layout
