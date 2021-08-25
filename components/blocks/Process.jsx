import React from 'react'

export default function Process() {
	return (
		<div className='list-wrapper'>
			<div className='red-line'></div>

			<div className='list-item-wrapper'>
				<div className='list-bullet'>1</div>
				<div className='list-item'>
					<div className='list-title'>ITEM</div>
					<div className='list-text'>Text</div>
				</div>
			</div>

			<div className='list-item-wrapper'>
				<div className='list-bullet'>2</div>
				<div className='list-item'>
					<div className='list-title'>ITEM</div>
					<div className='list-text'>Text</div>
				</div>
			</div>

			<div className='list-item-wrapper'>
				<div className='list-bullet'>3</div>
				<div className='list-item'>
					<div className='list-title'>ITEM</div>
					<div className='list-text'>Text</div>
				</div>
				<div className='white-line'></div>
			</div>
		</div>
	)
}
