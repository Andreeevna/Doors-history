import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './../../assets/styles/index.css'
import styles from './Breadcrumbs.module.css'

const Breadcrumbs = () => {
	const location = useLocation()

	const breadCrumbView = () => {
		const { pathname } = location
		const pathnames = pathname.split('/').filter(item => item)
		const capatilize = s => s.charAt(0).toUpperCase() + s.slice(1)
		return (
			<nav className={styles.breadcrumbs}>
				{pathnames.length ? (
					<span className={styles.crumb}>
						<Link to='/'>Home</Link>
					</span>
				) : (
					<span className={styles.crumb}>Home</span>
				)}
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
					const isLast = index === pathnames.length - 1
					return isLast ? (
						''
					) : (
						<span className={styles.crumb}>
							<Link to={`${routeTo}`}>{capatilize(name)}</Link>
						</span>
					)
				})}
			</nav>
		)
	}

	return <>{breadCrumbView()}</>
}

export default Breadcrumbs
