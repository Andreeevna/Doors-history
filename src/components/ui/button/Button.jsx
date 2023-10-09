import cn from 'classnames'
import React from 'react'

import styles from './Button.module.css'

const Button = ({ clickHandler = null }) => {
	return (
		<button
			className={cn(
				styles.collection_item__button,
				styles.btn,
				styles.btn_dark,
				styles.btn_animation
			)}
			onClick={clickHandler}
		>
			<div className={cn(styles.btn__border, styles.btn__border_lr)}>
				<div className={cn(styles.btn__border, styles.btn__border_tb)}></div>
			</div>
			<span>узнать больше</span>
		</button>
	)
}

export default Button
