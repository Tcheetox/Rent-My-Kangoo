import React, { useState } from 'react'

import { TextField, Button } from '@material-ui/core/'
import styles from '../../styles/blocks/contact.module.scss'
import { capitalize } from '../../lib/utils'
import useSendContact from '../hooks/useSendContact'
import CircularLoading from '../CircularLoading'
import SuccessIcon from '@material-ui/icons/Check'

export default function Contact() {
	const { sendForm, loading, error, success } = useSendContact()
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
		if (isFormValid()) sendForm(data)
	}

	const handleChange = e => {
		setData({ ...data, [e.target.name]: e.target.value })
		setErrors({ ...errors, [e.target.name]: null })
	}

	const FormStateRepresentation = () => {
		if (loading)
			return (
				<>
					<CircularLoading className={styles.loading} />
					<Button className={styles.submit} variant='contained' color='primary' type='submit' disabled>
						Sending...
					</Button>
				</>
			)
		else if (success)
			return (
				<div className={styles.success}>
					<SuccessIcon color='primary' />
					<p>Message sent!</p>
				</div>
			)
		else if (error) return <h3 className={styles.error}>An unexpected error has occured, please try again later.</h3>
		else
			return (
				<Button className={styles.submit} variant='contained' color='primary' type='submit'>
					Send
				</Button>
			)
	}

	return (
		<form id='contact' className={styles.form} autoComplete='off' onSubmit={handleSubmit}>
			<div className={loading || success || error ? styles.hidden : null}>
				<TextField
					className={styles.field}
					id='Email'
					label='Email'
					variant='outlined'
					name='email'
					value={data.email}
					onChange={handleChange}
					error={errors.email ? true : false}
					helperText={errors.email}
				/>
				<TextField
					className={styles.field}
					id='Name'
					label='Full name'
					variant='outlined'
					name='name'
					value={data.name}
					onChange={handleChange}
					error={errors.name ? true : false}
					helperText={errors.name}
				/>
				<TextField
					className={styles.field}
					id='Message'
					label='Message'
					multiline
					rows={4}
					variant='outlined'
					name='message'
					value={data.message}
					onChange={handleChange}
					error={errors.message ? true : false}
					helperText={errors.message}
				/>
			</div>
			<FormStateRepresentation />
		</form>
	)
}
