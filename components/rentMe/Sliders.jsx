import React, { useState } from 'react'

import { Slider, Paper } from '@mui/material'
import styles from './RentMe.module.scss'
import Price from './PriceEstimate'

export default function Estimation({ dateRange }) {
    const openingHours = { min: 8, max: 22 }
    const [sliderDetails, setSliderDetails] = useState({ km: 10, time: [10, 11] }) // Set defaults
    const [locationDetails, setLocationDetails] = useState(sliderDetails)

    return (
        <Paper className={styles.estimation}>
            <div>
                <Slider
                    className={styles.slider}
                    name="time-range"
                    value={sliderDetails.time}
                    onChange={(e, rng) => setSliderDetails(details => ({ ...details, time: rng }))}
                    onChangeCommitted={(e, rng) => setLocationDetails(details => ({ ...details, time: rng }))}
                    min={openingHours.min}
                    max={openingHours.max}
                    step={null}
                    marks={[...new Array((openingHours.max - openingHours.min) * 2 + 1)].map((e, k) => ({
                        value: k / 2 + openingHours.min,
                        label: (() => {
                            const trunc = Math.trunc(k / 2) + openingHours.min
                            if (k % 2 === 0 && trunc % 2 === 0) return `${trunc}:00`
                            return ''
                        })(),
                    }))}
                    valueLabelDisplay="auto"
                    valueLabelFormat={v => `${Math.trunc(v)}:${v % 1 === 0 ? '00' : '30'}`}
                />
                <Slider
                    name="distance"
                    min={10}
                    max={2000}
                    value={sliderDetails.km}
                    onChange={(e, dist) => setSliderDetails(details => ({ ...details, km: dist }))}
                    onChangeCommitted={(e, dist) => setLocationDetails(details => ({ ...details, km: dist }))}
                    valueLabelDisplay="auto"
                    marks={[
                        { value: 10, label: '10km' },
                        { value: 2000, label: '2000km' },
                    ]}
                    step={10}
                />
            </div>
            <Price locationDetails={locationDetails} dateRange={dateRange} />
        </Paper>
    )
}
