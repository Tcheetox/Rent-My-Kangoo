import React from 'react'

import styles from '../../styles/blocks/carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'
import Image from 'next/image' // https://nextjs.org/docs/api-reference/next/image
import { front, frontL, left, rear, rearR, right, rightO } from '../../media/pictures'

import paral from '../../media/bg.jpeg'

// https://www.npmjs.com/package/react-material-ui-carousel

export default function Carousel() {
	const pictures = [front, frontL, left, rear, rearR, right, rightO]
	// style={{ backgroundImage: `url(${front})` }}
	return (
		<>
			<div className={styles.parallax} style={{ backgroundImage: `url(${paral})` }} />
			<MuiCarousel
				className={styles.carousel}
				interval={5000}
				animation='fade'
				navButtonsAlwaysVisible={true}
				stopAutoPlayOnHover={false}
				timeout={100}
				indicatorContainerProps={{
					style: {
						position: 'absolute',
						bottom: '10px',
					},
				}}
				indicatorIconButtonProps={{
					style: {
						padding: '1px',
						color: 'gray',
					},
				}}
				activeIndicatorIconButtonProps={{
					style: {
						color: 'white',
					},
				}}
				navButtonsWrapperProps={{
					style: {
						margin: 'auto 3rem',
					},
				}}>
				{pictures.map((picture, k) => (
					<div key={k} className={styles.parallax} style={{ backgroundImage: `url(${picture})` }} />
					// <Image className={styles.parallax} key={k} src={picture} alt='Picture' placeholder='blur' />
				))}
			</MuiCarousel>
		</>
	)
}
