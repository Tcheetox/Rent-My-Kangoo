import React from 'react'

import Layout from '../Layout'
import ContactForm from '../forms/ContactForm'
import styles from '../../styles/blocks/contact.module.scss'
import TimerIcon from '@material-ui/icons/Timer'

export default function Contact() {
	return (
		<Layout className={styles.contact}>
			<h2 id='contact'>Contact us</h2>
			<p className={styles.message}>
				Should you have any questions or just want to know more about the rental process, please feel free to contact us. <br /> We usually
				reply in less than{' '}
				<strong className={styles.timing}>
					24 hours! <TimerIcon />
				</strong>
			</p>
			<ContactForm />
		</Layout>
	)
}
