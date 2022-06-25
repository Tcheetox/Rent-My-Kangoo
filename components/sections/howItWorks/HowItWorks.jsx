import React from 'react'

import Layout from '../../Layout'
import styles from './HowItWorks.module.scss'
import Process from './Process'
import use2EM from '../../hooks/use2EM'
import { useTranslation } from 'next-i18next'

export default function HowItWorks() {
    const { t } = useTranslation()
    return (
        <Layout className={styles.how}>
            <h2 id="how">{t('how-it-works')}</h2>
            <h3 className={styles.headline}>
                {t('how-it-works.h3-intro')} <strong>2EM</strong> - {t('how-it-works.h3-definition')}.<br />
                {t('how-it-works.h3-account')}{' '}
                <a
                    href="https://www.2em.ch/c/kevin-30450"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => use2EM('Referral link save 25CHF')}
                >
                    {t('link')}
                </a>{' '}
                {t('how-it-works.h3-referral')} <strong>25</strong> CHF!
            </h3>
            <Process />
        </Layout>
    )
}
