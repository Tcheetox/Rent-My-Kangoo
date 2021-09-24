import React, { useState, useEffect } from 'react'

import { Button } from '@material-ui/core'
import styles from './Sms.module.scss'

import ChatIcon from '@material-ui/icons/Chat'
import SmsIcon from '@material-ui/icons/Sms'

export default function Sms() {
	const [isMobile, setIsMobile] = useState(null)

	useEffect(() => {
		if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent))
			setIsMobile(true)
		else setIsMobile(false)
	}, [])

	if (isMobile === null) return null
	else if (isMobile)
		return (
			<div className={styles.wrapper}>
				<a href='sms:+32472701886'>
					<Button className={styles.sms} variant='contained' color='primary'>
						<SmsIcon />
					</Button>
				</a>
			</div>
		)
	else
		return (
			<div className={styles.wrapper}>
				<Button className={styles.sms} variant='contained' color='primary' onClick={() => (window.location.href = '#contact')}>
					<ChatIcon />
				</Button>
			</div>
		)
}
