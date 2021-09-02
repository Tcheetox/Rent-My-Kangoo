import React, { useState, useRef } from 'react'

import { Button, Popper, Grow, Paper, MenuList, MenuItem, ClickAwayListener } from '@material-ui/core'
import styles from '../../styles/atoms/mobileMenu.module.scss'

export default function MobileMenu() {
	const [open, setOpen] = useState(false)
	const [clicked, setClicked] = useState(false)
	const anchorRef = useRef(null)

	const handleListKeyDown = e => {
		if (e.key === 'Tab') {
			e.preventDefault()
			setOpen(false)
		}
	}

	const handleClick = (e, anchorTag = null) => {
		if (anchorRef.current && anchorRef.current.contains(e.target)) {
			return
		}
		if (anchorTag) window.location.href = anchorTag
		setOpen(false)
	}

	const animationStyle = open ? styles.open : styles.close
	const style = !clicked ? styles.unclicked : animationStyle

	return (
		<div className={styles.wrapper}>
			<Button
				className={style}
				ref={anchorRef}
				aria-controls={open ? 'mobile-menu-list' : undefined}
				aria-haspopup='true'
				onClick={() => {
					setOpen(p => !p)
					setClicked(true)
				}}>
				<div className={styles.toggler}>
					<i />
					<i />
					<i />
				</div>
			</Button>
			<Popper
				className={styles.menu}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement='bottom-start'
				transition
				disablePortal>
				{({ TransitionProps }) => (
					<Grow {...TransitionProps}>
						<Paper>
							<ClickAwayListener onClickAway={handleClick}>
								<MenuList autoFocusItem={open} id='mobile-menu-list' onKeyDown={handleListKeyDown}>
									<MenuItem onClick={e => handleClick(e, '#how')}>How it works?</MenuItem>
									<MenuItem onClick={e => handleClick(e, '#availability')}>Availability</MenuItem>
									<MenuItem onClick={e => handleClick(e, '#caracteristics')}>Caracteristics</MenuItem>
									<MenuItem onClick={e => handleClick(e, '#contact')}>Contact</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	)
}
