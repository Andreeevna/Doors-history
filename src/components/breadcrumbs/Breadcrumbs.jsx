import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './Breadcrumbs.module.css'
import Crumb from './crumb/Crumb'

const Breadcrumbs = () => {
	// state: {id, path, title, url}
	const { state } = useLocation()
	return (
		<nav className={styles.breadcrumbs}>
			{state.map(crumb => (
				<Crumb {...crumb} key={crumb.url} />
			))}
		</nav>
	)
}

export default Breadcrumbs
