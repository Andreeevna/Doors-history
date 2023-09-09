import React from 'react'

import { Link } from 'react-router-dom'
import './../../assets/styles/index.css'
import styles from './Collection.module.css'

const Collection = () => {
	return (
		<section className={styles.collection}>
			<div className='bg_container'>
				<div className={styles.collection_item}>
					<Link to='/' className={styles.collection_item__img}>
						<img src='' alt='Сlassic collection' />
					</Link>
					<div className={styles.collection_item__info}>
						<div className={styles.collection_item__text}>
							<h2 className={styles.collection_item__title}>Классика</h2>
							<p className={styles.collection_item__subtitle}>
								Решение вне времени для интерьеров со смыслом
							</p>
						</div>
						<Link to='/' className={styles.collection_item__button}></Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Collection
