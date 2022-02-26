import React from 'react'

import styles from './HowItWorks.module.scss'
import { useTranslation } from 'next-i18next'

export default function Documents() {
    const { t } = useTranslation()

    return (
        <div className={styles.documents}>
            <span>{t('process.span-bring')}:</span>
            <ul>
                <li>{t('process.li-driving-license')}</li>
                <li>{t('process.li-id')}</li>
                <li>{t('process.li-proof')}</li>
            </ul>
        </div>
    )
}
