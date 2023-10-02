import cn from 'classnames'
import React from 'react'

import './../../assets/styles/index.css'
import styles from './Logo.module.css'

const Logo = ({ footerLogo }) => {
	return (
		<div className={cn(styles.logo, footerLogo)}>
			<h2 className={styles.logo__name}>Дверная история</h2>
			<p className={styles.logo__text}>16 лет вместе</p>
		</div>
	)
}

export default Logo
