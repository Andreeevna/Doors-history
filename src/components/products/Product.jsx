import React from 'react'

import styles from './Product.module.css'

import BG1 from './../../assets/images/doors/decan.jpg'
import BG2 from './../../assets/images/doors/decan1.jpg'
import BG3 from './../../assets/images/doors/decan2.jpg'
import BG4 from './../../assets/images/doors/decan3.jpg'

const Product = () => {
	return (
		<section className={styles.product}>
			<div className='bg_container'>
				<div className={styles.product__card}>
					<div className={styles.images}>
						<div
							className={styles.current}
							style={{ backgroundImage: `url(${BG1})` }}
						/>
						<div className={styles.images__list}>
							<div
								className={styles.image}
								style={{ backgroundImage: `url(${BG2})` }}
							/>
							<div
								className={styles.image}
								style={{ backgroundImage: `url(${BG3})` }}
							/>
							<div
								className={styles.image}
								style={{ backgroundImage: `url(${BG4})` }}
							/>
						</div>
					</div>

					<div className={styles.info}>
						<h1 className={styles.title}>Наименование модели</h1>
						<div className={styles.color}>
							<span>Цвет модели:</span> бежевый
						</div>

						<div className={styles.sizes}>
							<span>Размеры:</span>
							<div className={styles.list}>
								<div className={styles.size}>600 x 2000</div>
								<div className={styles.size}>700 x 2000</div>
								<div className={styles.size}>800 x 2000</div>
								<div className={styles.size}>900 x 2000</div>
							</div>
						</div>

						<div className={styles.description}>
							<div className={styles.description__title}>Описание товара</div>
							<div className={styles.description__text}>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
								voluptates voluptas, dolores aliquam, saepe voluptatem
								aspernatur perferendis earum facere laborum, cum nihil? Alias
								iusto fugit soluta quod! Doloremque, ut? Ab!
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Product
