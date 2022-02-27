import React, { useState } from 'react'

import { TextField } from '@mui/material/'
import styles from './Contact.module.scss'
import { capitalize } from '../../../lib/utils'
import useSendContact from '../../hooks/useSendContact'
import ContactFormState from './ContactFormState'
import { useTranslation } from 'next-i18next'

export default function Contact() {
    const { t } = useTranslation()
    const { sendForm, loading, error, success } = useSendContact()
    const [data, setData] = useState({ email: '', name: '', message: '' })
    const [errors, setErrors] = useState({ email: null, name: null, message: null })

    const validEmail = email => {
        const re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email)
    }

    const isFormValid = () => {
        let _errors = errors
        // All fields are required
        Object.keys(data).forEach(e => {
            if (data[e] === '') _errors = { ..._errors, [e]: `${capitalize(t(e))} ${t('contact.cannot-be-empty')}` }
        })
        // Verify that email seems like an email
        if (data.email !== '' && !validEmail(data.email)) _errors = { ..._errors, email: t('contact.email-not-valid') }

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

    return (
        <form id="contact" className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
            <div className={loading || success || error ? styles.hidden : null}>
                <TextField
                    className={styles.field}
                    id="Email"
                    label={t('email')}
                    variant="outlined"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email ? true : false}
                    helperText={errors.email}
                />
                <TextField
                    className={styles.field}
                    id="Name"
                    label={t('full-name')}
                    variant="outlined"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    error={errors.name ? true : false}
                    helperText={errors.name}
                />
                <TextField
                    className={styles.field}
                    id="Message"
                    label={t('message')}
                    multiline
                    rows={4}
                    variant="outlined"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    error={errors.message ? true : false}
                    helperText={errors.message}
                />
            </div>
            <ContactFormState loading={loading} error={error} success={success} />
        </form>
    )
}
