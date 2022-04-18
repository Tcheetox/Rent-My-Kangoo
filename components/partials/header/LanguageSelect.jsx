import React, { useState } from 'react'

import { FormControl, Select, MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import styles from './styles/Language.module.scss'
import Image from 'next/image'
import ch from '../../../media/flags/ch.png'
import gb from '../../../media/flags/gb.png'
import deu from '../../../media/flags/deu.png'

export default function LanguageSelect() {
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const setCookie = locale => {
        document.cookie = `NEXT_LOCALE=${locale}; Secure; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    }

    return (
        <FormControl id="language-form" className={styles.language}>
            <Select
                variant="standard"
                className={styles.select}
                id="language-select"
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
                autoWidth
            >
                <MenuItem value={'fr'} className={styles.item}>
                    <Image alt="Swiss flag" src={ch} width={32} height={24} layout="fixed" priority={100} />
                    <label>Français</label>
                    <span>FR</span>
                </MenuItem>
                <MenuItem value={'en'} className={styles.item}>
                    <Image alt="UK flag" src={gb} width={32} height={24} layout="fixed" priority={100} />
                    <label>English</label>
                    <span>EN</span>
                </MenuItem>
                <MenuItem value={'de'} className={styles.item}>
                    <Image alt="German flag" src={deu} width={32} height={24} layout="fixed" priority={100} />
                    <label>Deutsch</label>
                    <span>DE</span>
                </MenuItem>
            </Select>
        </FormControl>
    )
}
