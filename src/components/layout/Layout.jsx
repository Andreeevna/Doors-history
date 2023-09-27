import React from 'react'
import Breadcrumbs from '../breadcrumbs/Breadcrumbs'
import HeaderMain from '../headerMain/HeaderMain'

const Layout = ({ children }) => {
	return (
		<>
			<HeaderMain />
			<Breadcrumbs />
			{children && children}
		</>
	)
}

export default Layout
