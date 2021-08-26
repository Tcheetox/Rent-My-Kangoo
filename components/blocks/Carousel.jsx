import React from 'react'

import styles from '../../styles/blocks/carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'

export default function Carousel() {
	const pictures = ['front', 'frontL', 'left', 'rear', 'rearR', 'right', 'rightO']

	return (
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
				<div key={k} className={styles.parallax} style={{ backgroundImage: `url('/pictures/${picture}.jpg')` }} />
			))}
		</MuiCarousel>
	)
}
