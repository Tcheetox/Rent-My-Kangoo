import React from 'react'

import { Grid } from '@material-ui/core'
import useArrow from '../hooks/useArrow'
import styles from '../../styles/blocks/information.module.scss'

import ConnectIcon from '@material-ui/icons/HowToReg'
import LockIcon from '@material-ui/icons/EnhancedEncryption'
import CarIcon from '@material-ui/icons/DriveEta'

export default function Process() {
	const {
		Arrow,
		settings: { DIRECTION },
	} = useArrow()

	return (
		<div className={styles.process}>
			<Grid className={styles.row}>
				<Grid item sm={6}>
					<div id='STEP1' className={styles.right}>
						<ConnectIcon />
					</div>
				</Grid>
				<Grid item sm={6} className={styles.left}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam.
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
					translation: [2, -0.5],
				}}
			/>
			<Grid className={styles.row}>
				<Grid item sm={6} className={styles.right}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam.
					</p>
				</Grid>
				<Grid item sm={6}>
					<div id='STEP2' className={styles.left}>
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
					translation: [-1.5, -0.5],
				}}
			/>
			<Grid className={styles.row}>
				<Grid item sm={6}>
					<div id='STEP3' className={styles.right}>
						<CarIcon />
					</div>
				</Grid>
				<Grid item sm={6} className={styles.left}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam.
					</p>
				</Grid>
			</Grid>
		</div>
	)
}
