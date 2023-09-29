import cn from 'classnames'
import React from 'react'

import './../../assets/styles/index.css'
import styles from './Collection.module.css'

const Collection = () => {
	return (
		<section className={styles.collection}>
			<div className={cn('av_container', styles.collection_container)}>
				{/* {data.map(item => {
					return (
						<div className={styles.collection_item} key={item.id}>
							<Link to={`/products`} className={styles.collection_item__img}>
								<img src={item.imageUrl} alt={item.alt} />
							</Link>
							<div className={styles.collection_item__info}>
								<div className={styles.collection_item__text}>
									<h2 className={styles.collection_item__title}>{item.name}</h2>
									<p className={styles.collection_item__subtitle}>
										{item.description}
									</p>
								</div>
								<Link
									to='/products'
									className={cn(
										styles.collection_item__button,
										styles.btn,
										styles.btn_dark,
										styles.btn_animation
									)}
								>
									<div
										className={cn(styles.btn__border, styles.btn__border_lr)}
									>
										<div
											className={cn(styles.btn__border, styles.btn__border_tb)}
										></div>
									</div>
									<span>узнать больше</span>
								</Link>
							</div>
						</div>
					)
				})} */}
			</div>
		</section>
	)
}

export default Collection
