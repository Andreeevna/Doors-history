import React from 'react'
import { Link } from 'react-router-dom'
import './../../assets/styles/index.css'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='bg_container'>
				<div className={styles.nav}>
					<Link to='/' className={styles.header__menu_link}>
						Меню
					</Link>
					<div className={styles.header__logo}>
						{/* <img width="38" src={logoSvg} alt="Pizza logo" /> */}
						<h2 className={styles.logo__name}>Дверная история</h2>
						<span>16 лет вместе </span>
					</div>
					<div className={styles.header__contact}>
						<span className={styles.contact__text}>Связь с компанией</span>
						<Link to='tel:89102688080' className={styles.contact__link}>
							8-910-268-80-80
						</Link>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
