import React from 'react'

import logo from './logo3-nobg.png'
import Image from 'next/image'
import styles from '../styles/blocks/logo.module.scss'

export default function Logo() {
	return (
		<div className={styles.logo}>
			<Image src={logo} alt='logo' priority />
		</div>
	)
}
