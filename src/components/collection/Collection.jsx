import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import './../../assets/styles/index.css'
import styles from './Collection.module.css'

import Classic1 from './../../assets/images/collection/classic2.jpg'
import Classic from './../../assets/images/collection/classic3.jpg'

const Collection = () => {
	return (
		<section className={styles.collection}>
			<div className={cn('av_container', styles.collection_container)}>
				<div className={styles.collection_item}>
					<Link to='/' className={styles.collection_item__img}>
						<img src={Classic1} alt='Сlassic collection' />
					</Link>
					<div className={styles.collection_item__info}>
						<div className={styles.collection_item__text}>
							<h2 className={styles.collection_item__title}>Классика</h2>
							<p className={styles.collection_item__subtitle}>
								Решение вне времени для интерьеров со смыслом
							</p>
						</div>
						<Link
							to='/'
							className={cn(
								styles.collection_item__button,
								styles.btn,
								styles.btn_dark,
								styles.btn_animation
							)}
						>
							<div className={cn(styles.btn__border, styles.btn__border_lr)}>
								<div
									className={cn(styles.btn__border, styles.btn__border_tb)}
								></div>
							</div>
							<span>узнать больше</span>
						</Link>
					</div>
				</div>
				<div className={styles.collection_item}>
					<Link to='/' className={styles.collection_item__img}>
						<img src={Classic} alt='Neoclassic collection' />
					</Link>
					<div className={styles.collection_item__info}>
						<div className={styles.collection_item__text}>
							<h2 className={styles.collection_item__title}>Неоклассика</h2>
							<p className={styles.collection_item__subtitle}>
								Свежий взгляд на традиционный дизайн{' '}
							</p>
						</div>
						<Link
							to='/'
							className={cn(
								styles.collection_item__button,
								styles.btn,
								styles.btn_dark,
								styles.btn_animation
							)}
						>
							<div className={cn(styles.btn__border, styles.btn__border_lr)}>
								<div
									className={cn(styles.btn__border, styles.btn__border_tb)}
								></div>
							</div>
							<span>узнать больше</span>
						</Link>
					</div>
				</div>
				<div className={styles.collection_item}>
					<Link to='/' className={styles.collection_item__img}>
						<img src={Classic} alt='Сlassic collection' />
					</Link>
					<div className={styles.collection_item__info}>
						<div className={styles.collection_item__text}>
							<h2 className={styles.collection_item__title}>
								Современный стиль
							</h2>
							<p className={styles.collection_item__subtitle}>
								Акцент на геометрию и красоту простых форм{' '}
							</p>
						</div>
						<Link
							to='/'
							className={cn(
								styles.collection_item__button,
								styles.btn,
								styles.btn_dark,
								styles.btn_animation
							)}
						>
							<div className={cn(styles.btn__border, styles.btn__border_lr)}>
								<div
									className={cn(styles.btn__border, styles.btn__border_tb)}
								></div>
							</div>
							<span>узнать больше</span>
						</Link>
					</div>
				</div>
				<div className={styles.collection_item}>
					<Link to='/' className={styles.collection_item__img}>
						<img src={Classic} alt='Сlassic collection' />
					</Link>
					<div className={styles.collection_item__info}>
						<div className={styles.collection_item__text}>
							<h2 className={styles.collection_item__title}>
								раздвижные перегородки
							</h2>
							<p className={styles.collection_item__subtitle}>
								Оптимизация вашего пространства
							</p>
						</div>
						<Link
							to='/'
							className={cn(
								styles.collection_item__button,
								styles.btn,
								styles.btn_animation,
								styles.btn_dark
							)}
						>
							<div className={cn(styles.btn__border, styles.btn__border_lr)}>
								<div
									className={cn(styles.btn__border, styles.btn__border_tb)}
								></div>
							</div>
							<span>узнать больше</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Collection
