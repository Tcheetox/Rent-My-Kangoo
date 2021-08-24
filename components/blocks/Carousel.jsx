import React from 'react'

import styles from '../../styles/blocks/carousel.module.scss'
import MuiCarousel from 'react-material-ui-carousel'
import Image from 'next/image' // https://nextjs.org/docs/api-reference/next/image
import { front, frontL, left, rear, rearR, right, rightO, frontBlurred } from '../../media/pictures'

// https://www.npmjs.com/package/react-material-ui-carousel

export default function Carousel() {
	const pictures = [front, frontL, left, rear, rearR, right, rightO]

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
			}}>
			{pictures.map((picture, k) => (
				<Image
					key={k}
					src={picture}
					alt='Picture'
					// placeholder='blur'
					// blurDataURL={
					// 	'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKABIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDgtT8WfEHwBc21r4m+IOl2kt1l4Zrq5uIERRx8yxhyRuHX39jWvpvjTx/rl19l0H4haXrN4sY8+PSdRvjFbMc7TIzQAhWH1+6TzkCvk74jIreItYyoP+kgcj/YB/mT+dev/sU6fayX/im5a2ha4itmEcxjBdPkJ4PUV9FUxFWlBe9d2PHjh6U5O0bI91jb4tNGhfxvCHIBYLqF2Rn/AL90Vdm0+1aVybaEkscnyxRXF9er9/wR0/VKH8p//9k='
					// }
				/>
			))}
		</MuiCarousel>
	)
}
