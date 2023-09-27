import React from 'react'
import HeaderMain from '../headerMain/HeaderMain'

const Layout = ({ children }) => {
	return (
		<>
			<HeaderMain />
			{/* <Breadcrumbs /> */}
			{children && children}
		</>
	)
}

export default Layout
