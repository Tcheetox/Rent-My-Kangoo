import React, { useState } from 'react'

import Calendar from './Calendar'
import Estimation from './Estimation'
import { Button } from '@mui/material'
import styles from './RentMe.module.scss'
import Layout from '../Layout'
import { format } from 'date-fns'
import ReactGA from 'react-ga'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { enGB, frCH } from 'date-fns/locale'

export default function RentMe({ availabilityDates }) {
	const { t } = useTranslation()
	const { locale } = useRouter()

	const [dateRange, setDateRange] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	})

	const BookingInfo = () => {
		const formattedDate = date => format(date, 'd MMMM', { locale: locale === 'en' ? enGB : frCH })
		const range =
			dateRange.startDate.toString() === dateRange.endDate.toString() ? (
				<span>
					{t('on')} <strong>{formattedDate(dateRange.startDate)}</strong>
				</span>
			) : (
				<span>
					{t('from')} <strong>{formattedDate(dateRange.startDate)}</strong> {t('to')} <strong>{formattedDate(dateRange.endDate)}</strong>
				</span>
			)
		return (
			<h3>
				{t('rent.h3-rent')} {range}
			</h3>
		)
	}

	return (
		<Layout className={styles.rent}>
			<h2 id='availability'>{t('availability')}</h2>
			<div className={styles.wrapper}>
				<Calendar availabilityDates={availabilityDates} dateRange={dateRange} setDateRange={setDateRange} />
				<div className={styles.booking}>
					<BookingInfo />
					<Button
						variant='contained'
						color='primary'
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
						}}>
						{t('rent-me')}
					</Button>
					<p>
						{t('rent.p-reservation')}
						<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
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
