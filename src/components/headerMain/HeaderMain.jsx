import cn from 'classnames'
import React from 'react'

import './../../assets/styles/index.css'
import styles from './HeaderMain.module.css'

import BG1 from './../../assets/images/backgrounds/header_top.jpg'

const HeaderMain = () => {
	return (
		<section className={styles.header_main}>
			<img src={BG1} alt='Интерьер' className={styles.header_main__img} />

			<div className={cn('av_container', styles.header_main__info)}>
				{/* <Breadcrumbs /> */}
			</div>
		</section>
	)
}

export default HeaderMain
