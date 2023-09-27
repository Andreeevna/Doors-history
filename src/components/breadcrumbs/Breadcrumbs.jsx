import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
	const location = useLocation()

	const breadCrumbView = () => {
		const { pathname } = location
		const pathnames = pathname.split('/').filter(item => item)
		const capatilize = s => s.charAt(0).toUpperCase() + s.slice(1)
		return (
			<div>
				<div>
					{pathnames.length > 0 ? (
						<div>
							<Link to='/'>Home</Link>
						</div>
					) : (
						<div>Home</div>
					)}
					{pathnames.map((name, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
						const isLast = index === pathnames.length - 1
						return isLast ? (
							''
						) : (
							<div>
								<Link to={`${routeTo}`}>{capatilize(name)}</Link>
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	return <>{breadCrumbView()}</>
}

export default Breadcrumbs
