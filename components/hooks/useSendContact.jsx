import { useState } from 'react'

export default function useSendContact() {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const sendForm = async data => {
		setLoading(true)
		fetch('/api/contact', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => {
				console.log('Response received')
				if (res.status === 200) setSuccess(true)
			})
			.catch(err => {
				console.error(err)
				setError(true)
			})
			.finally(() => setLoading(false))
	}

	return { sendForm: sendForm, loading: loading, error: error, success: success }
}
