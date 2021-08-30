import React, { useState } from 'react'

import { Calendar } from './'
import { Button } from '@material-ui/core'
import styles from '../../styles/blocks/rent.module.scss'
import Layout from '../Layout'
import { format } from 'date-fns'

export default function RentMe({ availabilityDates }) {
	const [dateRange, setDateRange] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	})

	const BookingInfo = () => {
		const formattedDate = date => format(date, 'MMMM dd')
		const range =
			dateRange.startDate.toString() === dateRange.endDate.toString() ? (
				<span>
					on <strong>{formattedDate(dateRange.startDate)}</strong>
				</span>
			) : (
				<span>
					from <strong>{formattedDate(dateRange.startDate)}</strong> to <strong>{formattedDate(dateRange.endDate)}</strong>
				</span>
			)
		return <h3>Book the Kangoo {range}</h3>
	}

	return (
		<Layout className={styles.rent}>
			<h2 id='rent'>Rent me</h2>
			<div className={styles.wrapper}>
				<Calendar availabilityDates={availabilityDates} dateRange={dateRange} setDateRange={setDateRange} />
				<div className={styles.booking}>
					<BookingInfo />
					<Button
						variant='contained'
						color='primary'
						onClick={() =>
							window.open(
								`https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428?date_debut=${format(
									dateRange.startDate,
									'dd/MM/yyyy'
								)}&date_fin=${format(dateRange.endDate, 'dd/MM/yyyy')}#location`,
								'_blank'
							)
						}>
						Book
					</Button>
					<p>
						The reservation and payment will be made on{' '}
						<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
							2EM
						</a>
						.
					</p>
				</div>
			</div>
		</Layout>
	)
}
