import React from 'react'

import Layout from '../Layout'
import styles from '../../styles/blocks/information.module.scss'
import { Process } from './'

export default function Information() {
	return (
		<Layout className={styles.information}>
			<h2>How it works?</h2>
			<p>
				We rent our car through <strong>2EM</strong> - a platform that promotes car sharing between individuals.
			</p>
			<Process />
		</Layout>
	)
}
