import React, { useState } from 'react'

import Calendar from './Calendar'
import Estimation from './Sliders'
import Dates from './Dates'
import { Button } from '@mui/material'
import styles from './RentMe.module.scss'
import Layout from '../Layout'
import { format } from 'date-fns'
import ReactGA from 'react-ga'
import { useTranslation } from 'next-i18next'

export default function RentMe({ availabilityDates }) {
    const { t } = useTranslation()

    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    return (
        <Layout className={styles.rent}>
            <h2 id="availability">{t('availability')}</h2>
            <div className={styles.wrapper}>
                <Calendar availabilityDates={availabilityDates} dateRange={dateRange} setDateRange={setDateRange} />
                <div className={styles.booking}>
                    <Dates dateRange={dateRange} />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            window.open(
                                `https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428?date_debut=${format(
                                    dateRange.startDate,
                                    'dd/MM/yyyy'
                                )}&date_fin=${format(dateRange.endDate, 'dd/MM/yyyy')}#location`,
                                '_blank'
                            )
                            // GA tracking
                            ReactGA.event({
                                category: 'Button click',
                                label: '2EM',
                                action: 'Rent through 2EM',
                            })
                        }}
                    >
                        {t('rent-me')}
                    </Button>
                    <p>
                        {t('rent.p-reservation')}
                        <a
                            href="https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428"
                            target="_blank"
                            rel="noreferrer"
                        >
                            2EM
                        </a>
                        .
                    </p>
                    <Estimation dateRange={dateRange} />
                </div>
            </div>
        </Layout>
    )
}
