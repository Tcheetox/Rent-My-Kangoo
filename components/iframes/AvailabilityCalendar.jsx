import React, { useState, useEffect } from 'react'

import CircularLoading from '../CircularLoading'
import styles from '../../styles/blocks/iframes.module.scss'

export default function AvailabilityCalendar() {
	const [url, setUrl] = useState('')
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setUrl('https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428')
	}, [])

	return (
		<div className={styles.availability}>
			{!visible ? <CircularLoading /> : null}
			<iframe
				src={url}
				className={visible ? styles.visible : styles.invisible}
				title='Availability'
				scrolling='no'
				onLoad={() => setVisible(true)}
			/>
		</div>
	)
}
