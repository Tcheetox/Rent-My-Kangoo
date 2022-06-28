import React, { useState } from 'react'

import Slider from '@mui/material/Slider'
import styles from './RentMe.module.scss'
import { useTranslation } from 'next-i18next'

export default function Sliders({ details, setDetails }) {
    const { t } = useTranslation()
    const openingHours = { min: 8, max: 22 }
    const [sliderDetails, setSliderDetails] = useState({ km: details.km, time: details.time })

    const formatTime = time => {
        const timeString = time.toString()
        if (time % 10 === 0) return timeString.length === 1 ? `0${time}:00` : `${timeString.substring(0, 2)}:00`
        return timeString.length === 3 ? `0${timeString.substring(0, 1)}:30` : `${timeString.substring(0, 2)}:30`
    }

    return (
        <div>
            <Slider
                className={styles.slider}
                name="time-range"
                value={sliderDetails.time}
                getAriaLabel={() => t('time-range')}
                onChange={(_, rng) => setSliderDetails(previousSlideDetails => ({ ...previousSlideDetails, time: rng }))}
                onChangeCommitted={(_, rng) =>
                    setDetails(previousDetails => ({ ...previousDetails, time: rng, am: formatTime(rng[0]), pm: formatTime(rng[1]) }))
                }
                min={openingHours.min}
                max={openingHours.max}
                step={null}
                marks={[...new Array((openingHours.max - openingHours.min) * 2 + 1)].map((_e, k) => ({
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
                getAriaLabel={() => t('distance')}
                min={20}
                max={2000}
                value={sliderDetails.km}
                onChange={(_, dist) => setSliderDetails(previousSliderDetails => ({ ...previousSliderDetails, km: dist }))}
                onChangeCommitted={(_, dist) => setDetails(previousDetails => ({ ...previousDetails, km: dist }))}
                valueLabelDisplay="auto"
                marks={[
                    { value: 20, label: '20km' },
                    { value: 2000, label: '2000km' },
                ]}
                step={10}
            />
        </div>
    )
}
