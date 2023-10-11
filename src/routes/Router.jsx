import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes.data'

import './../assets/styles/index.css'

const RouterApp = () => {
	return (
		<Routes>
			{routes.map(route => (
				<Route
					key={route.path}
					path={route.path}
					element={<route.component />}
				/>
			))}
		</Routes>
	)
}

export default RouterApp
