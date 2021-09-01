import React from 'react'

// https://www.npmjs.com/package/react-date-range
import { Paper } from '@material-ui/core'
import { DateRangePicker } from 'react-date-range'
import { enGB, frCH } from 'date-fns/locale'
import { add, endOfMonth } from 'date-fns'
import theme from '../../pages/_theme'
import { useRouter } from 'next/router'
import useWindowWidth from '../hooks/useWindowWidth'
import styles from '../../styles/blocks/rent.module.scss'

// TODO: prevent calendar to swap month when starting in month+1 (awaiting for GitHub response)

export default function Calendar({ availabilityDates: unavailable, dateRange, setDateRange }) {
	const { locale } = useRouter()
	const { smaller } = useWindowWidth(710)

	return (
		<Paper className={styles.calendar}>
			<DateRangePicker
				ranges={[dateRange]}
				onChange={e => setDateRange(e.selection)}
				disabledDates={unavailable.map(d => new Date(d.year, d.month - 1, d.day, 0, 0, 0))}
				months={smaller ? 1 : 2}
				showMonthAndYearPickers={false}
				direction='horizontal'
				minDate={new Date()}
				maxDate={endOfMonth(add(new Date(), { years: 1 }))}
				showDateDisplay={false}
				showPreview={true}
				dragSelectionEnabled={false}
				weekStartsOn={1}
				monthDisplayFormat='MMMM yyyy'
				rangeColors={[theme.palette.primary.main]}
				showSelectionPreview={false}
				locale={locale.includes('en') ? enGB : frCH}
				weekdayDisplayFormat='EEEEEE'
			/>
		</Paper>
	)
}
