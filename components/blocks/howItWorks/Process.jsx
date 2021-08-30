import React from 'react'

import { Grid } from '@material-ui/core'
import useArrow from '../../hooks/useArrow'
import styles from '../../../styles/blocks/information.module.scss'
import cx from 'classnames'

import ConnectIcon from '@material-ui/icons/HowToReg'
import LockIcon from '@material-ui/icons/EnhancedEncryption'
import CarIcon from '@material-ui/icons/DriveEta'
import KeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/EventAvailable'
import PayIcon from '@material-ui/icons/Payment'
import ApproveIcon from '@material-ui/icons/ThumbUpAlt'

export default function Process() {
	const {
		Arrow,
		settings: { DIRECTION },
	} = useArrow()

	return (
		<div className={styles.process}>
			<Grid className={styles.row}>
				<Grid item sm={6} className={styles.icon}>
					<div id='STEP1' className={styles.right}>
						<ConnectIcon />
					</div>
				</Grid>
				<Grid item sm={6} className={styles.left}>
					<p>
						Prior to booking the car, we suggest you to check the <a href='#rent'>availability</a>{' '}
						<CalendarIcon className={styles.miniIcon} /> below, or to go directly on{' '}
						<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
							2EM
						</a>{' '}
						platform. Then, you can connect to your 2EM account or create it if necessary.
					</p>
				</Grid>
			</Grid>
			<Arrow
				className='arrow'
				from={{
					direction: DIRECTION.LEFT,
					node: () => document.getElementById('STEP1'),
					translation: [-3, 0.5],
				}}
				to={{
					direction: DIRECTION.RIGHT,
					node: () => document.getElementById('STEP2'),
					translation: [1.5, -0.5],
				}}
			/>
			<Grid className={styles.row}>
				<Grid item sm={6} className={styles.right}>
					<p>
						Once you proceed to the reservation through the system, we will get notified and promptly approve{' '}
						<ApproveIcon className={styles.miniIcon} /> your request. You'll then have the opportunity to pay{' '}
						<PayIcon className={styles.miniIcon} /> for your rental directly on the platform.
					</p>
				</Grid>
				<Grid item sm={6} className={styles.icon}>
					<div id='STEP2' className={cx(styles.left, styles.lock)}>
						<LockIcon />
					</div>
				</Grid>
			</Grid>
			<Arrow
				className='arrow'
				from={{
					direction: DIRECTION.RIGHT,
					node: () => document.getElementById('STEP2'),
					translation: [0, 0.1],
				}}
				to={{
					direction: DIRECTION.LEFT,
					node: () => document.getElementById('STEP3'),
					translation: [-0.5, -0.3],
				}}
			/>
			<Grid className={styles.row}>
				<Grid item sm={6} className={styles.icon}>
					<div id='STEP3' className={styles.right}>
						<CarIcon />
					</div>
				</Grid>
				<Grid item sm={6} className={styles.left}>
					<p>
						It's almost done! Prepare the necessary documents and meet us{' '}
						<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
							Quai des Arénières, 1205 Genève
						</a>{' '}
						at the time and day of your reservation. We'll quickly review the documents together and give you the keys{' '}
						<KeyIcon className={cx(styles.miniIcon, styles.key)} /> of the Kangoo. Enjoy your trip!
					</p>
				</Grid>
			</Grid>
		</div>
	)
}
