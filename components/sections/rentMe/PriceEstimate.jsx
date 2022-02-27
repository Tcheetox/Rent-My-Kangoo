import React, { useState, useEffect } from 'react'

import { format } from 'date-fns'
import styles from './RentMe.module.scss'
import Loading from '../../atoms/loading/Loading'

export default function Price({ locationDetails, dateRange }) {
    const [data, setData] = useState({ price: null, loading: false })

    useEffect(() => {
        setData(d => ({ ...d, loading: true }))
        fetch('/api/price', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...locationDetails,
                startDate: format(dateRange.startDate, 'dd/MM/yyyy'),
                endDate: format(dateRange.endDate, 'dd/MM/yyyy'),
            }),
        })
            .then(resp => resp.json())
            .then(res => setData(d => ({ ...d, price: res.price })))
            .catch(err => {
                console.error(err)
                setData(d => ({ ...d, price: null }))
            })
            .finally(() => setData(d => ({ ...d, loading: false })))
    }, [locationDetails, dateRange])

    if (data.loading)
        return (
            <div className={styles.price}>
                <Loading className={styles.loading} />
            </div>
        )
    else if (data.price)
        return (
            <div className={styles.price}>
                Estimation <strong>{data.price}</strong>
                <span> CHF</span>
            </div>
        )

    return null
}
