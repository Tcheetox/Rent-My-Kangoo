import React from 'react'

import { Grid, Tooltip } from '@material-ui/core'
import useArrow from '../../hooks/useArrow'
import styles from '../../../styles/blocks/how.module.scss'
import cx from 'classnames'
import useWindowWidth from '../../hooks/useWindowWidth'
import { useTranslation } from 'next-i18next'

import ConnectIcon from '@material-ui/icons/HowToReg'
import LockIcon from '@material-ui/icons/EnhancedEncryption'
import CarIcon from '@material-ui/icons/DriveEta'
import KeyIcon from '@material-ui/icons/VpnKey'
import CalendarIcon from '@material-ui/icons/EventAvailable'
import PayIcon from '@material-ui/icons/Payment'
import ApproveIcon from '@material-ui/icons/ThumbUpAlt'
import VanIcon from '@material-ui/icons/AirportShuttle'

export default function Process() {
	const { t } = useTranslation()
	const { smaller } = useWindowWidth(1118)

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
				<li>Proof of address</li>
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
						{t('process.step1.p-prio')} <a href='#availability'>{t('availability').toLowerCase()}</a>{' '}
						<CalendarIcon className={styles.miniIcon} />, {t('process.step1.p-or')}
						<a href='https://www.2em.ch/location-voiture/geneve/renault-kangoo-4428' target='_blank' rel='noreferrer'>
							2EM
						</a>{' '}
						{t('process.step1.p-then')}
					</p>
				</div>
			</Grid>
			<Arrow
				className='arrow'
				from={{
					direction: smaller ? DIRECTION.BOTTOM : DIRECTION.LEFT,
					node: () => document.getElementById('STEP1'),
					translation: smaller ? [0, 0.8] : [-3, 0.5],
				}}
				to={{
					direction: smaller ? DIRECTION.TOP : DIRECTION.RIGHT,
					node: () => document.getElementById('STEP2'),
					translation: smaller ? [0, -0.8] : [2, -0.6],
				}}
			/>
			<Grid className={styles.row}>
				<div className={styles.step2}>
					<p>
						{t('process.step2.p-once')} <strong>{t('process.step2.p-system')}</strong>, {t('process.step2.p-notify')}
						<ApproveIcon className={styles.miniIcon} /> {t('process.step2.p-request')} <PayIcon className={styles.miniIcon} />{' '}
						{t('process.step2.p-rental')}.
					</p>
					<div id='STEP2' className={styles.icon}>
						<LockIcon className={styles.lockIcon} />
					</div>
				</div>
			</Grid>
			<Arrow
				className='arrow'
				from={{
					direction: smaller ? DIRECTION.BOTTOM : DIRECTION.RIGHT,
					node: () => document.getElementById('STEP2'),
					translation: smaller ? [0, 0.8] : [0, 0],
				}}
				to={{
					direction: smaller ? DIRECTION.TOP : DIRECTION.LEFT,
					node: () => document.getElementById('STEP3'),
					translation: smaller ? [0, -0.8] : [-1, -0.3],
				}}
			/>
			<Grid className={styles.row}>
				<div className={styles.step3}>
					<div id='STEP3' className={styles.icon}>
						<CarIcon className={styles.carIcon} />
					</div>
					<p>
						{t('process.step3.p-ready')}! <VanIcon className={styles.miniIcon} /> {t('process.step3.p-prepare')}
						<Tooltip title={<Documents />} placement='top' arrow>
							<strong className={styles.hoverable}>{t('process.step3.p-documents')}</strong>
						</Tooltip>{' '}
						{t('process.step3.p-meet')}
						<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
							Quai des Arénières, 1205 {t('geneva')}
						</a>{' '}
						{t('process.step3.p-time')} <KeyIcon className={cx(styles.miniIcon, styles.key)} /> {t('process.step3.p-kangoo')}.
						<strong>{t('process.step3.p-enjoy')}!</strong>
					</p>
				</div>
			</Grid>
		</div>
	)
}
