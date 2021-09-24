import React, { useState } from 'react'

import { FormControl, Select, MenuItem } from '@material-ui/core'
import { useRouter } from 'next/router'
import styles from './styles/Language.module.scss'
import Image from 'next/image'
import chSVG from '../../media/flags/ch.png'
import gbSVG from '../../media/flags/gb.png'

export default function LanguageSelect() {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	const setCookie = locale => {
		document.cookie = `NEXT_LOCALE=${locale}; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	}

	return (
		<FormControl id='language-form' className={styles.language}>
			<Select
				className={styles.select}
				id='language-select'
				value={router.locale}
				onChange={e => {
					if (window) window.scrollTo(0, 0)
					setCookie(e.target.value)
					router.push('/', '/', { locale: e.target.value })
				}}
				IconComponent={() => null}
				MenuProps={{
					disableScrollLock: true,
				}}
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				autoWidth>
				<MenuItem value={'fr'} className={styles.item}>
					<Image alt='Swiss flag' src={chSVG} width={32} height={24} />
					<label>Français</label>
					<span>FR</span>
				</MenuItem>
				<MenuItem value={'en'} className={styles.item}>
					<Image alt='UK flag' src={gbSVG} width={32} height={24} />
					<label>English</label>
					<span>EN</span>
				</MenuItem>
			</Select>
		</FormControl>
	)
}