import React from 'react'
import { Parallax } from 'react-parallax'

import PanelPng from '../../assets/images/parallax/panel1.jpg'

import './../../assets/styles/index.css'
import styles from './ParallaxContainer.module.css'

const ParallaxContainer = () => {
	return (
		<Parallax blur={0} bgImage={PanelPng} bgImageAlt='the cat' strength={600}>
			<div className='bg_container'>
				<div className={styles.parallax_inner}>
					<h2 className={styles.title}>БЕЗГРАНИЧНЫЙ ВЫБОР</h2>
					<p className={styles.text}>
						Классика или минимализм, массив или современные отделки, подберите
						свою идеальную дверь.
					</p>
				</div>
			</div>
		</Parallax>
	)
}

export default ParallaxContainer
