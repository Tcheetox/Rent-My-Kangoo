import React from 'react'

import Layout from '../Layout'
import { Paper } from '@material-ui/core'
import styles from './Specifications.module.scss'
import cx from 'classnames'
import { useTranslation } from 'next-i18next'

import FuelIcon from '@material-ui/icons/LocalGasStation'
import PeopleIcon from '@material-ui/icons/People'
import UsbIcon from '@material-ui/icons/Usb'
import BluetoothIcon from '@material-ui/icons/Bluetooth'
import SnowIcon from '@material-ui/icons/AcUnit'

export default function Specifications() {
	const { t } = useTranslation()

	return (
		<div className={styles.wrapper}>
			<div className={styles.bgWrapper} />
			<Layout className={styles.spec}>
				<h2 id='caracteristics'>{t('caracteristics')}</h2>
				<div className={styles.wrapper}>
					<Paper className={cx(styles.paper, styles.techspecWrapper)}>
						<h3>{t('spec.h3-tech')}</h3>
						<div className={styles.techspec}>
							<div className={styles.group}>
								<label>{t('engine')}</label>
								<span>
									<FuelIcon />
									{t('diesel')}
								</span>
							</div>
							<div className={styles.group}>
								<label>{t('gearbox')}</label>
								<span>{t('manual')}</span>
							</div>
							<div className={styles.group}>
								<label>{t('mileage')}</label>
								<span>0 - 150,000 km</span>
							</div>
							<div className={styles.group}>
								<label>{t('spec.h3-seating')}</label>
								<span>
									<PeopleIcon /> 2 {t('persons')}
								</span>
							</div>
						</div>
					</Paper>
					<Paper className={cx(styles.paper, styles.accessoriesWrapper)}>
						<h3>{t('accessories')}</h3>
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
								{t('spec.li-chains')}
							</li>
						</ul>
					</Paper>
					<Paper className={cx(styles.paper, styles.advantagesWrapper)}>
						<h3>{t('advantages')}</h3>
						<ul>
							<li>{t('spec.li-neighboring')}</li>
							<li>{t('spec.li-baloise')}</li>
							<li>{t('spec.li-drivers')}</li>
						</ul>
					</Paper>
					<Paper className={cx(styles.paper, styles.detailsWrapper)}>
						<h3>{t('spec.h3-power')}</h3>
						<ul>
							<li>
								{t('power')} <strong>55</strong>kW - <strong>1461</strong>cm³
							</li>
							<li>
								{t('useful-load')} <strong>524</strong>kg
							</li>
							<li>
								{t('dimensions')} {t('length-acr')}
								<strong>165</strong> {t('width-acr')}
								<strong>110</strong> {t('height-acr')}
								<strong>85</strong>
							</li>
						</ul>
					</Paper>
				</div>
			</Layout>
		</div>
	)
}
