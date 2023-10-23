import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import styles from './СommunicationForm.module.css'

const СommunicationForm = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_j5yempc',
				'template_7ntdx7c',
				form.current,
				'XxypEImd3uR6t2F3C'
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				}
			)
	}

	return (
		<form ref={form} onSubmit={sendEmail} className={styles.form}>
			<input type='text' placeholder='Ваше имя' name='user_name' />
			<input
				type='number'
				placeholder='+7 (888) 888-88-88'
				name='user_number'
			/>
			<button type='submit' value='Send' className={styles.form__submit_btn}>
				Оставить заявку
			</button>
		</form>
	)
}

export default СommunicationForm
