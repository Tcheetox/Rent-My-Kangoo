import React from 'react'

import styles from '../../styles/blocks/carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'
import Image from 'next/image' // https://nextjs.org/docs/api-reference/next/image
import { front, frontL, inside, left, rear, rearR, right, rightO } from '../../media/pictures'

// https://www.npmjs.com/package/react-material-ui-carousel

export default function Carousel() {
	const pictures = [front, frontL, inside, left, rear, rearR, right, rightO]

	return (
		<MuiCarousel className={styles.carousel} interval={5000} animation='fade' navButtonsAlwaysVisible={true} stopAutoPlayOnHover={false}>
			{pictures.map((picture, k) => (
				<Image key={k} src={picture} alt='Picture' />
			))}
		</MuiCarousel>
	)
}
