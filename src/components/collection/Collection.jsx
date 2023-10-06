import cn from 'classnames'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { filterByCollection } from '../../redux/products/productsSlice'
import { scrollToTop } from '../../utils/auxiliary'
import './../../assets/styles/index.css'
import styles from './Collection.module.css'

const Collection = () => {
	const { list } = useSelector(state => state.collections)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onPruducts = (name, collectionName) => {
		navigate(`/products/${collectionName}`)
		dispatch(filterByCollection(name))
		scrollToTop()
	}

	return (
		<section className={styles.collection}>
			<div className={cn('av_container', styles.collection_container)}>
				{list &&
					list.map(item => {
						return (
							<div className={styles.collection_item} key={item.id}>
								<div
									onClick={() => onPruducts(item.name, item.collectionName)}
									className={styles.collection_item__img}
								>
									<img src={item.imageUrl} alt={item.alt} />
								</div>
								<div className={styles.collection_item__info}>
									<div className={styles.collection_item__text}>
										<h2 className={styles.collection_item__title}>
											{item.name}
										</h2>
										<p className={styles.collection_item__subtitle}>
											{item.description}
										</p>
									</div>
								</div>
								<button
									className={cn(
										styles.collection_item__button,
										styles.btn,
										styles.btn_dark,
										styles.btn_animation
									)}
									onClick={() => onPruducts(item.name, item.collectionName)}
								>
									<div
										className={cn(styles.btn__border, styles.btn__border_lr)}
									>
										<div
											className={cn(styles.btn__border, styles.btn__border_tb)}
										></div>
									</div>
									<span>узнать больше</span>
								</button>
							</div>
						)
					})}
			</div>
		</section>
	)
}

export default Collection
