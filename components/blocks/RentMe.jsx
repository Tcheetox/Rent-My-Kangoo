import React from 'react'

import { Calendar } from './'
import styles from '../../styles/blocks/rent.module.scss'
import Layout from '../Layout'

export default function RentMe({ availabilityDates }) {
	return (
		<Layout className={styles.rent}>
			<h2 id='Rent'>Rent me</h2>
			<p>Check the calendar and blabla...</p>
			<Calendar availabilityDates={availabilityDates} />
		</Layout>
	)
}
