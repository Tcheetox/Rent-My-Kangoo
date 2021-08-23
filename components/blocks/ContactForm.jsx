import React, { useState } from 'react'

import { TextField, Button } from '@material-ui/core/'
import styles from '../../styles/blocks/contact.module.scss'
import { capitalize } from '../../utils'

export default function ContactForm() {
	const [data, setData] = useState({ email: '', name: '', message: '' })
	const [errors, setErrors] = useState({ email: null, name: null, message: null })

	const validEmail = email => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	const isFormValid = () => {
		let _errors = errors
		// All fields are required
		Object.keys(data).forEach(e => {
			if (data[e] === '') _errors = { ..._errors, [e]: `${capitalize(e)} cannot be empty` }
		})
		// Verify that email seems like an email
		if (data.email !== '' && !validEmail(data.email)) _errors = { ..._errors, email: 'This email is not valid' }

		// Set errors state and return boolean
		setErrors(_errors)
		return Object.values(_errors).filter(e => e).length === 0
	}

	const handleSubmit = f => {
		f.preventDefault()
		if (isFormValid()) console.log('SUBMIT FORM')
	}

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
		setErrors({ ...errors, [e.target.name]: null })
	}

	return (
		<form className={styles.contactForm} autoComplete='off' onSubmit={handleSubmit}>
			<div className='truc' id='truc'>
				COUCOU
			</div>
			<TextField
				id='Email'
				label='Email'
				variant='filled'
				name='email'
				value={data.email}
				onChange={handleChange}
				error={errors.email ? true : false}
				helperText={errors.email}
			/>
			<TextField
				id='Name'
				label='Full name'
				variant='filled'
				name='name'
				value={data.name}
				onChange={handleChange}
				error={errors.name ? true : false}
				helperText={errors.name}
			/>
			<TextField
				id='Message'
				label='Message'
				multiline
				rows={4}
				variant='filled'
				name='message'
				value={data.message}
				onChange={handleChange}
				error={errors.message ? true : false}
				helperText={errors.message}
			/>
			<Button variant='contained' color='primary' type='submit'>
				Send
			</Button>
		</form>
	)
}
