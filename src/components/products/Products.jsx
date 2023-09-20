import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Products.module.css'

const Products = () => {
	const data = [
		{
			id: '1mod',
			imageUrl: '/images/product/model1.jpg',
			alt: 'Дверь межкомнатная',
			name: 'Классика',
			description: 'Решение вне времени для интерьеров со смыслом',
		},
		{
			id: '2mod',
			imageUrl: '/images/product/model2.jpg',
			alt: 'Дверь межкомнатная',
			name: 'Неоклассика',
			description: 'Свежий взгляд на традиционный дизайн',
		},
		{
			id: '3mod',
			imageUrl: '/images/product/model3.png',
			alt: 'Дверь межкомнатная',
			name: 'Современный стиль',
			description: 'Акцент на геометрию и красоту простых форм',
		},
		{
			id: '4mod',
			imageUrl: '/images/product/model4.jpg',
			alt: 'Дверь межкомнатная',
			name: 'раздвижные перегородки',
			description: 'Оптимизация вашего пространства',
		},
	]

	return (
		<section className={styles.products}>
			<div className={cn('bg_container', styles.products_container)}>
				{data.map(item => {
					return (
						<div className={styles.products_item} key={item.id}>
							<Link to='/' className={styles.products_item__img}>
								<img src={item.imageUrl} alt={item.alt} />
							</Link>
							<div className={styles.products_item__info}>
								<div className={styles.products_item__text}>
									<h2 className={styles.products_item__title}>
										Наименование модели
									</h2>
									<p className={styles.products_item__subtitle}>
										Описание модели
									</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Products
