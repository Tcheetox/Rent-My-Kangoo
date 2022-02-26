import React from 'react'

import styles from './Carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'
import cx from 'classnames'

export default function Carousel() {
	return (
		<MuiCarousel
			className={styles.carousel}
			interval={5000}
			navButtonsAlwaysVisible={true}
			stopAutoPlayOnHover={false}
			timeout={300}
			indicatorContainerProps={{
				style: {
					zIndex: 1,
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
			{[...Array(8)].map((p, k) => (
				<div key={k} className={cx(styles.parallax, styles[`p${k + 1}`])} />
			))}
		</MuiCarousel>
	)
}
