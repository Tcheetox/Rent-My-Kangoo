import React from 'react'

import Feedback from './Feedback'
import styles from './Reviews.module.scss'
import reviewsInput from './reviews.json'

export default function Reviews() {
	return (
		<div className={styles.reviews}>
			{reviewsInput.map((r, k) => (
				<Feedback key={k} review={r} />
			))}
		</div>
	)
}
