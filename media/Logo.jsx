import React from 'react'

import logo from './logo-nobg.png'
import Image from 'next/image'
import styles from '../styles/atoms/logo.module.scss'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Image src={logo} alt='Logo' priority />
		</div>
	)
}
