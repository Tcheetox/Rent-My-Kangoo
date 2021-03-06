import React, { useState, useEffect } from 'react'

import { Button } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat'
import SmsIcon from '@mui/icons-material/Sms'
import styles from './Sms.module.scss'

export default function Sms() {
    const [isMobile, setIsMobile] = useState(null)

    useEffect(() => {
        if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                navigator.userAgent
            )
        )
            setIsMobile(true)
        else setIsMobile(false)
    }, [])

    if (isMobile === null) return null

    if (isMobile)
        return (
            <div className={styles.wrapper}>
                <a href="sms:+41787729118">
                    <Button className={styles.sms} variant="contained" color="primary" aria-label="Contact">
                        <SmsIcon />
                    </Button>
                </a>
            </div>
        )
    else
        return (
            <div className={styles.wrapper}>
                <Button
                    className={styles.sms}
                    variant="contained"
                    color="primary"
                    onClick={() => (window.location.href = '#contact')}
                    aria-label="Contact"
                >
                    <ChatIcon />
                </Button>
            </div>
        )
}
