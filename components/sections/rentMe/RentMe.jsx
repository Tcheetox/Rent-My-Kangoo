import React, { useState } from 'react'

import Calendar from './Calendar'
import Sliders from './Sliders'
import Price from './Price'
import Dates from './Dates'
import { Button, Paper } from '@mui/material'
import styles from './RentMe.module.scss'
import Layout from '../../Layout'
import { format } from 'date-fns'
import use2EM from '../../hooks/use2EM'
import { useTranslation } from 'next-i18next'

export default function RentMe({ availabilityDates }) {
    const { t } = useTranslation()

    const [details, setDetails] = useState({
        startDate: new Date(),
        endDate: new Date(),
        am: '10:00',
        pm: '11:00',
        time: [10, 11],
        key: 'selection',
        km: 10,
    })

    return (
        <Layout className={styles.rent}>
            <h2 id="availability">{t('availability')}</h2>
            <div className={styles.wrapper}>
                <Calendar availabilityDates={availabilityDates} dateRange={details} setDateRange={setDetails} />
                <div className={styles.booking}>
                    <Dates dateRange={details} />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            window.open(
                                `https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428?date_debut=${format(
                                    details.startDate,
                                    'dd/MM/yyyy'
                                )}&date_fin=${format(details.endDate, 'dd/MM/yyyy')}&state_am=${details.am}&state_pm=${
                                    details.pm
                                }#location`,
                                '_blank'
                            )
                            use2EM('Price estimate link')
                        }}
                    >
                        {t('rent-me')}
                    </Button>
                    <p>
                        {t('rent.p-reservation')}
                        <a href="https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428" target="_blank" rel="noreferrer">
                            2EM
                        </a>
                        .
                    </p>
                    <Paper className={styles.estimation}>
                        <Sliders details={details} setDetails={setDetails} />
                        <Price details={details} />
                    </Paper>
                </div>
            </div>
        </Layout>
    )
}
