import React from 'react'

import Layout from '../../Layout'
import styles from '../../../styles/blocks/information.module.scss'
import Process from './Process'

export default function HowItWorks() {
	return (
		<Layout className={styles.information}>
			<h2 id='how'>How it works?</h2>
			<h3 className={styles.headline}>
				We rent our car through <strong>2EM</strong> - a platform that promotes car sharing between individuals in Switzerland.
			</h3>
			<Process />
		</Layout>
	)
}
