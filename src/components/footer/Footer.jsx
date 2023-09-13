import React from 'react'

import Logo from '../logo/Logo'
import './../../assets/styles/index.css'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='bg_container'>
				<div className={styles.footer_top}>
					<div className={styles.footer_top__contact}>
						<h2 className={styles.footer_top__title}></h2>
					</div>
					<Logo />
					<div className={styles.map}></div>
				</div>
				<div className={styles.footer_bottom}>
					<h2 className={styles.footer_bottom__title}>Мы в соцсетях:</h2>
					<ul className={styles.footer_bottom__list}>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
