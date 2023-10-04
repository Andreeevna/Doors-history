import React from 'react'

import styles from './Hamburger.module.css'

const Hamburger = ({ active, setActive }) => {
	return (
		// <nav className={styles.burger_nav}>
		<div className={styles.burger_btn} onClick={() => setActive(!active)}>
			<span />
		</div>
		// </nav>
	)
}

export default Hamburger
