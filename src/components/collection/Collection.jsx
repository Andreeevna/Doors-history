import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import './../../assets/styles/index.css'
import styles from './Collection.module.css'

const Collection = () => {
	const data = [
		{
			id: '1cat',
			imageUrl: '/images/collection/classic3.jpg',
			alt: 'Сlassic collection',
			name: 'Классика',
			description: 'Решение вне времени для интерьеров со смыслом',
		},
		{
			id: '2cat',
			imageUrl: '/images/collection/neoclassic.jpg',
			alt: 'Neoclassic collection',
			name: 'Неоклассика',
			description: 'Свежий взгляд на традиционный дизайн',
		},
		{
			id: '3cat',
			imageUrl: '/images/collection/modern1.jpg',
			alt: 'Modern collection',
			name: 'Современный стиль',
			description: 'Акцент на геометрию и красоту простых форм',
		},
		{
			id: '4cat',
			imageUrl: '/images/collection/razd2.jpg',
			alt: 'Sliding partitions',
			name: 'раздвижные перегородки',
			description: 'Оптимизация вашего пространства',
		},
	]
	return (
		<section className={styles.collection}>
			<div className={cn('av_container', styles.collection_container)}>
				{data.map(item => {
					return (
						<div className={styles.collection_item} key={item.id}>
							<Link to='/' className={styles.collection_item__img}>
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
				})}
			</div>
		</section>
	)
}

export default Collection
