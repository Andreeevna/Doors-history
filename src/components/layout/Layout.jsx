import React from 'react'
import Header from '../header/Header'

const Layout = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			{children && <div>{children}</div>}
		</div>
	)
}

export default Layout
