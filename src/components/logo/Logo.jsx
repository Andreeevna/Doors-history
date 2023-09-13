import React from 'react'

import styles from './Logo.module.css'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<h2 className={styles.logo__name}>Дверная история</h2>
			<p className={styles.logo__text}>16 лет вместе</p>
		</div>
	)
}

export default Logo
