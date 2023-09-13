import React from 'react'

import styles from './СommunicationForm.module.css'

const СommunicationForm = () => {
	return (
		<form className={styles.form}>
			<input type='text' placeholder='Ваше имя' />
			<input type='number' placeholder='+7 (888) 888-88-88' />
			<button type='submit' className={styles.form__submit_btn}>
				Оставить заявку
			</button>
		</form>
	)
}

export default СommunicationForm
