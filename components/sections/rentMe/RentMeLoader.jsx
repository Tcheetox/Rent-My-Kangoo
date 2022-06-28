import React from 'react'

import styles from './RentMe.module.scss'
import Layout from '../../hoc/Layout'
import LazyLoader from '../../hoc/LazyLoader'
import { useTranslation } from 'next-i18next'
import cx from 'classnames'

export default function RentMeLoader({ availabilityDates }) {
    const { t } = useTranslation()

    return (
        <Layout className={styles.rent}>
            <h2 id="availability">{t('availability')}</h2>
            <LazyLoader
                childLoader={() => import('./RentMe')}
                childProps={{ availabilityDates: availabilityDates }}
                className={cx(styles.wrapper, styles.placeholder, 'MuiPaper-rounded')}
            />
        </Layout>
    )
}
