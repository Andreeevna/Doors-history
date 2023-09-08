import React from 'react'
import { Link } from 'react-router-dom'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import './../../assets/styles/index.css'
import styles from './PromoSlider.module.css'

import BGSlide1 from './../../assets/images/slider/bg1.jpg'
import BGSlide2 from './../../assets/images/slider/bg2.jpg'
import BGSlide3 from './../../assets/images/slider/bg4.jpg'
import BGSlide4 from './../../assets/images/slider/bg5.jpg'

const PromoSlider = () => {
	return (
		<>
			<div className='bg_container'>
				<Swiper
					navigation={true}
					modules={[Navigation]}
					spaceBetween={1}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					onSwiper={swiper => console.log(swiper)}
				>
					<SwiperSlide>
						<div className={styles.promo_container}>
							<img src={BGSlide1} alt='Slide 2' />
							<div className={styles.promo}>
								<h4 className={styles.promo__item_title}>
									Коллекция аксессуаров
								</h4>
								<Link className={styles.promo__item_link} to='#'>
									подробнее...
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.promo_container}>
							<img src={BGSlide2} alt='Slide 2' />
							<div className={styles.promo}>
								<h4 className={styles.promo__item_title}>Новинки</h4>
								<Link className={styles.promo__item_link} to='#'>
									подробнее...
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.promo_container}>
							<img src={BGSlide3} alt='Slide 3' />
							<div className={styles.promo}>
								<h4 className={styles.promo__item_title}>Акции месяца</h4>
								<Link className={styles.promo__item_link} to='#'>
									подробнее...
								</Link>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={styles.promo_container}>
							<img src={BGSlide4} alt='Slide 4' />
							<div className={styles.promo}>
								<h4 className={styles.promo__item_title}>
									Раздвижные конструкции
								</h4>
								<Link className={styles.promo__item_link} to='#'>
									подробнее...
								</Link>
							</div>
						</div>
					</SwiperSlide>
					...
				</Swiper>
			</div>
		</>
	)
}

export default PromoSlider
