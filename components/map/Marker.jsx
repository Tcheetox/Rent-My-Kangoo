import React from 'react'

import { useTranslation } from 'next-i18next'
import MapMarker from '@material-ui/icons/Room'
import styles from './Map.module.scss'
import { Tooltip } from '@material-ui/core'

export default function Marker() {
	const { t } = useTranslation()
	return (
		<div className={styles.mapMarker}>
			<Tooltip
				title={
					<a href='https://www.google.com/maps/dir//Quai+des+Arénières,+1205+Genève' target='_blank' rel='noreferrer'>
						Quai des Arénières, 1205 {t('geneva')} - {t('switzerland')}
					</a>
				}
				placement='top'
				arrow
				interactive>
				<MapMarker />
			</Tooltip>
		</div>
	)
}
