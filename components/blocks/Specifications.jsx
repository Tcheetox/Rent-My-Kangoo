import React from 'react'

import Layout from '../Layout'
import { Paper } from '@material-ui/core'
import styles from '../../styles/blocks/spec.module.scss'

export default function Specifications() {
	return (
		<Layout className={styles.spec}>
			<h2 id='Caracteristics'>Caracteristics</h2>
			<Paper>
				<h3>Technical specifications</h3>
				<div className={styles.group}>
					<label>Engine</label>
					<span>Diesel</span>
				</div>
				<div className={styles.group}>
					<label>Gearbox</label>
					<span>Manual</span>
				</div>
				<div className={styles.group}>
					<label>Counter</label>
					<span>100 - 150,000 km</span>
				</div>
				<div className={styles.group}>
					<label>Seating capacity</label>
					<span>2 persons</span>
				</div>
			</Paper>
			<Paper>
				<h3>Options and accessories</h3>
				<ul>
					<li>USB</li>
					<li>Bluetooth</li>
					<li>Snow chain</li>
				</ul>
			</Paper>
			<Paper>
				<h3>Advantages</h3>
				<ul>
					<li>The vehicle can be driven in neighboring countries</li>
					<li>2EM-Bâloise insurance: civil liability, collision and breakdown </li>
					<li>Second drivers can be insured free of charge</li>
				</ul>
			</Paper>
		</Layout>
	)
}
