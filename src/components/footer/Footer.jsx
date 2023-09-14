import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../logo/Logo'
import './../../assets/styles/index.css'
import styles from './Footer.module.css'

import LocationMap from '../locationMap/LocatonMap'
import Tg from './../../assets/images/icons/telegram-svgrepo-com.svg'
import Vk from './../../assets/images/icons/vk-svgrepo-com.svg'
import Wh from './../../assets/images/icons/whatsapp-svgrepo-com.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='bg_container'>
				<div className={styles.footer_top}>
					<div className={styles.footer_top__contact}>
						<h2 className={styles.footer_top__title}>Контакты:</h2>
						<Link to='tel:89102688080' className={styles.footer_top__link}>
							8-910-268-80-80
						</Link>{' '}
						<Link to='tel:89536153888' className={styles.footer_top__link}>
							8-953-615-38-88
						</Link>
					</div>
					<Logo />
					<div className={styles.map}>
						<h2 className={styles.map__title}>Адрес</h2>

						<LocationMap />
					</div>
				</div>
				<div className={styles.footer_bottom}>
					<h2 className={styles.footer_bottom__title}>Мы в соцсетях:</h2>
					<ul className={styles.social__list}>
						<li className={styles.social__item}>
							<Link to='/' className={styles.social__link}>
								<img className={styles.social__img} src={Vk} alt='Vkontakte' />
							</Link>
						</li>

						<li className={styles.social__item}>
							<Link to='/' className={styles.social__link}>
								<img className={styles.social__img} src={Wh} alt='WhatsApp' />
							</Link>
						</li>
						<li className={styles.social__item}>
							<Link to='/' className={styles.social__link}>
								<img className={styles.social__img} src={Tg} alt='Telegram' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
