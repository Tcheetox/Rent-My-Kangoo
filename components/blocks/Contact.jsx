import React from 'react'

import Layout from '../Layout'
import { Location, ContactForm } from './'
import styles from '../../styles/blocks/contact.module.scss'

export default function Contact() {
	return (
		<Layout className={styles.jumbo}>
			<Location />
			<ContactForm />
		</Layout>
	)
}
