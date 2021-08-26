import React from 'react'

import Layout from '../Layout'
import ContactForm from '../forms/ContactForm'
import styles from '../../styles/blocks/contact.module.scss'
import TimerIcon from '@material-ui/icons/Timer'

export default function Contact() {
	return (
		<Layout className={styles.contact}>
			<h2 id='Contact'>Contact us</h2>
			<p className={styles.contactMessage}>
				Should you have any questions or just want to know more about the rental process, please feel free to contact us. <br /> We usually
				replies in less than <strong>48 hours</strong>!<TimerIcon />
			</p>
			<ContactForm />
		</Layout>
	)
}
