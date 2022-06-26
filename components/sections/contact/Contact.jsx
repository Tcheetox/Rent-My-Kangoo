import React from 'react'

import Layout from '../../hoc/Layout'
import ContactForm from './ContactForm'
import styles from './Contact.module.scss'
import TimerIcon from '@mui/icons-material/Timer'
import { useTranslation } from 'next-i18next'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <Layout className={styles.contact}>
            <h2 id="contact">{t('contact-us')}</h2>
            <p className={styles.message}>
                {t('contact.p-question')}.
                <br />
                {t('contact.p-reply')}
                <strong className={styles.timing}>
                    24 {t('hours')}! <TimerIcon />
                </strong>
            </p>
            <ContactForm />
        </Layout>
    )
}
