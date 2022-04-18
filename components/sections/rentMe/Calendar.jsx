import React from 'react'

// https://www.npmjs.com/package/react-date-range
import { Paper } from '@mui/material'
import { DateRangePicker } from 'react-date-range'
import { enGB, frCH, de } from 'date-fns/locale'
import { add, endOfMonth } from 'date-fns'
import theme from '../../../styles/theme'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import useWindowWidth from '../../hooks/useWindowWidth'
import styles from './RentMe.module.scss'

export default function Calendar({ availabilityDates: unavailable, dateRange, setDateRange }) {
    const { t } = useTranslation()
    const { locale } = useRouter()
    const { smaller } = useWindowWidth(710)

    const getLocale = () => {
        switch (locale) {
            case 'fr':
                return frCH
            case 'de':
                return de
            case 'en':
            default:
                return enGB
        }
    }

    return (
        <Paper className={styles.calendar}>
            <DateRangePicker
                ranges={[dateRange]}
                onChange={e => setDateRange(previous => ({ ...previous, ...e.selection }))}
                disabledDates={unavailable.map(d => new Date(d.year, d.month - 1, d.day, 0, 0, 0))}
                months={smaller ? 1 : 2}
                showMonthAndYearPickers={false}
                direction="horizontal"
                minDate={new Date()}
                maxDate={endOfMonth(add(new Date(), { years: 1 }))}
                showDateDisplay={false}
                showPreview={true}
                dragSelectionEnabled={false}
                weekStartsOn={1}
                monthDisplayFormat="MMMM yyyy"
                rangeColors={[theme.palette.primary.main]}
                showSelectionPreview={false}
                locale={getLocale()}
                weekdayDisplayFormat="EEEEEE"
                ariaLabels={{
                    prevButton: t('previous'),
                    nextButton: t('next'),
                }}
                preventSnapRefocus
            />
        </Paper>
    )
}
