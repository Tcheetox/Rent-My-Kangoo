import React from 'react'

import Layout from '../../Layout'
import styles from '../../../styles/blocks/how.module.scss'
import Process from './Process'
import { useTranslation } from 'next-i18next'

export default function HowItWorks() {
	const { t } = useTranslation()
	return (
		<Layout className={styles.how}>
			<h2 id='how'>{t('how-it-works')}</h2>
			<h3 className={styles.headline}>
				{t('how-it-works.h3-intro')} <strong>2EM</strong> - {t('how-it-works.h3-definition')}.
			</h3>
			<Process />
		</Layout>
	)
}
