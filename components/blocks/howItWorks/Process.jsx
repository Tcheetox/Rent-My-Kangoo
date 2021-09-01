import React from 'react'

import { Grid, Tooltip } from '@material-ui/core'
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

	const Documents = () => (
		<div className={styles.documents}>
			<span>Bring with you:</span>
			<ul>
				<li>Driving license</li>
				<li>ID card</li>
				<li>Proof of domicile</li>
			</ul>
		</div>
	)

	return (
		<div className={styles.process}>
			<Grid className={styles.row}>
				<div className={styles.step1}>
					<div id='STEP1' className={styles.icon}>
						<ConnectIcon className={styles.connectIcon} />
					</div>
					<p>
						Prior to booking the car, we suggest you to check the <a href='#availability'>availability</a>{' '}
						<CalendarIcon className={styles.miniIcon} /> below, or to go directly on{' '}
						<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
							2EM
						</a>{' '}
						platform. Then, you can connect to your 2EM account or create it if necessary.
					</p>
				</div>
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
					translation: [2, -0.6],
				}}
			/>
			<Grid className={styles.row}>
				<div className={styles.step2}>
					<p>
						Once you proceed to the reservation through the system, we will get notified and promptly approve{' '}
						<ApproveIcon className={styles.miniIcon} /> your request. You'll then have the opportunity to pay{' '}
						<PayIcon className={styles.miniIcon} /> for your rental directly on the platform.
					</p>
					<div id='STEP2' className={styles.icon}>
						<LockIcon className={styles.lockIcon} />
					</div>
				</div>
			</Grid>
			<Arrow
				className='arrow'
				from={{
					direction: DIRECTION.RIGHT,
					node: () => document.getElementById('STEP2'),
					translation: [0, 0],
				}}
				to={{
					direction: DIRECTION.LEFT,
					node: () => document.getElementById('STEP3'),
					translation: [-1, -0.3],
				}}
			/>
			<Grid className={styles.row}>
				<div className={styles.step3}>
					<div id='STEP3' className={styles.icon}>
						<CarIcon className={styles.carIcon} />
					</div>
					<p>
						It's almost done! Prepare the{' '}
						<Tooltip title={<Documents />} placement='top' arrow>
							<strong className={styles.hoverable}>necessary documents</strong>
						</Tooltip>{' '}
						and meet us{' '}
						<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
							Quai des Arénières, 1205 Genève
						</a>{' '}
						at the time and day of your reservation. We'll quickly review the documents together and give you the keys{' '}
						<KeyIcon className={cx(styles.miniIcon, styles.key)} /> of the Kangoo. <strong>Enjoy your trip!</strong>
					</p>
				</div>
			</Grid>
		</div>
	)
}
