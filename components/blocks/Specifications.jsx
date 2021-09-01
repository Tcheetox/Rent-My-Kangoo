import React from 'react'

import Layout from '../Layout'
import { Paper } from '@material-ui/core'
import styles from '../../styles/blocks/spec.module.scss'
import cx from 'classnames'
import Image from 'next/image'

import bg from '../../media/spec-bg.png'
import FuelIcon from '@material-ui/icons/LocalGasStation'
import PeopleIcon from '@material-ui/icons/People'
import UsbIcon from '@material-ui/icons/Usb'
import BluetoothIcon from '@material-ui/icons/Bluetooth'
import SnowIcon from '@material-ui/icons/AcUnit'

export default function Specifications() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.bgWrapper}>
				<Image alt='Charts' src={bg} objectFit='cover' layout='fill' />
			</div>
			<Layout className={styles.spec}>
				<h2 id='caracteristics'>Caracteristics</h2>
				<div className={styles.wrapper}>
					<Paper className={cx(styles.paper, styles.techspecWrapper)}>
						<h3>Technical specifications</h3>
						<div className={styles.techspec}>
							<div className={styles.group}>
								<label>Engine</label>
								<span>
									<FuelIcon />
									Diesel
								</span>
							</div>
							<div className={styles.group}>
								<label>Gearbox</label>
								<span>Manual</span>
							</div>
							<div className={styles.group}>
								<label>Counter</label>
								<span>0 - 150,000 km</span>
							</div>
							<div className={styles.group}>
								<label>Seating capacity</label>
								<span>
									<PeopleIcon /> 2 persons
								</span>
							</div>
						</div>
					</Paper>
					<Paper className={cx(styles.paper, styles.accessoriesWrapper)}>
						<h3>Accessories</h3>
						<ul>
							<li>
								<UsbIcon className={styles.option} />
								USB
							</li>
							<li>
								<BluetoothIcon className={styles.option} />
								Bluetooth
							</li>
							<li>
								<SnowIcon className={styles.option} />
								Snow chains
							</li>
						</ul>
					</Paper>
					<Paper className={cx(styles.paper, styles.advantagesWrapper)}>
						<h3>Advantages</h3>
						<ul>
							<li>The vehicle can be driven in neighboring countries</li>
							<li>2EM-Bâloise insurance: civil liability, collision and breakdown </li>
							<li>Second drivers can be insured free of charge</li>
						</ul>
					</Paper>
					<Paper className={cx(styles.paper, styles.advantagesWrapper)}>
						<h3>Advantages</h3>
						<ul>
							<li>The vehicle can be driven in neighboring countries</li>
							<li>2EM-Bâloise insurance: civil liability, collision and breakdown </li>
							<li>Second drivers can be insured free of charge</li>
						</ul>
					</Paper>
				</div>
			</Layout>
		</div>
	)
}
