import React from 'react'

import logo from '../../media/logo-nobg-200x144.png'
import Image from 'next/image'
import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Image src={logo} alt="" width={100} height={72} layout="fixed" priority />
        </div>
    )
}
