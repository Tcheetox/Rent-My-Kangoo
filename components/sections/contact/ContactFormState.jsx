import React from 'react'

import { Button } from '@mui/material/'
import SuccessIcon from '@mui/icons-material/Check'
import Loading from '../../atoms/loading/Loading'
import { useTranslation } from 'next-i18next'
import styles from './Contact.module.scss'

export default function ContactFormState({ loading, success, error }) {
    const { t } = useTranslation()

    if (loading)
        return (
            <>
                <Loading className={styles.loading} />
                <Button className={styles.submit} variant="contained" color="primary" type="submit" disabled>
                    {t('contact.sending')}...
                </Button>
            </>
        )

    if (success)
        return (
            <div className={styles.success}>
                <SuccessIcon color="primary" />
                <p>{t('contact.message-sent')}!</p>
            </div>
        )

    if (error) return <h3 className={styles.error}>{t('contact.unexpected-error')}.</h3>

    return (
        <Button className={styles.submit} variant="contained" color="primary" type="submit">
            {t('send')}
        </Button>
    )
}
