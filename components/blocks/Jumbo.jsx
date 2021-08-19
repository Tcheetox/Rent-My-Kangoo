import React from 'react'

//import Image from 'next/image'
import styles from '../../styles/blocks/jumbo.module.scss'
import Layout from '../Layout'

export default function Jumbo() {
	return (
		<Layout className={styles.jumbo}>
			<h1>THIS IS JUMBO</h1>
		</Layout>
	)
}
