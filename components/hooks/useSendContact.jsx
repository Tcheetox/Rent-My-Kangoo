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
                if (res.status === 201) setSuccess(true)
                else setError(true)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }

    return { sendForm: sendForm, loading: loading, error: error, success: success }
}
