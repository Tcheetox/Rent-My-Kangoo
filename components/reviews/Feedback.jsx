import React from 'react'

import { Paper } from '@material-ui/core'
import styles from './Reviews.module.scss'
import Image from 'next/image'
import StarRateIcon from '@material-ui/icons/StarRate'

export default function Feedback({ review: { name, message, profile, picture } }) {
	return (
		<Paper className={styles.feedback}>
			<div className={styles.pictureWrapper}>
				<a href={profile} target='_blank' rel='noreferrer'>
					<Image alt='Profile' src={picture} width={50} height={50} layout='responsive' />
				</a>
			</div>
			<div className={styles.content}>
				<div className={styles.head}>
					<span className={styles.name}>{name}</span>
					<div className={styles.rating}>
						{[...Array(5)].map((v, k) => (
							<StarRateIcon key={k} />
						))}
					</div>
				</div>
				<span className={styles.message}>{message}</span>
			</div>
		</Paper>
	)
}
