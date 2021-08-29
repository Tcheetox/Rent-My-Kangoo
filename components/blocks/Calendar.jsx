import React from 'react'

// https://www.npmjs.com/package/react-date-range
import { Paper } from '@material-ui/core'
import { DateRangePicker } from 'react-date-range'
import styles from '../../styles/blocks/calendar.module.scss'
import { enUS, frCH } from 'date-fns/locale'
import { add, endOfMonth } from 'date-fns'

// TODO: prevent calendar to swap month when starting in month+1 (awaiting for GitHub response)

export default function Calendar({ availabilityDates: unavailable, dateRange, setDateRange }) {
	return (
		<Paper className={styles.calendar}>
			<DateRangePicker
				ranges={[dateRange]}
				onChange={e => setDateRange(e.selection)}
				disabledDates={unavailable.map(d => new Date(d.year, d.month - 1, d.day, 0, 0, 0))}
				months={2}
				showMonthAndYearPickers={false}
				direction='horizontal'
				minDate={new Date()}
				maxDate={endOfMonth(add(new Date(), { years: 1 }))}
				showDateDisplay={false}
				showPreview={true}
				dragSelectionEnabled={false}
				weekStartsOn={1}
				monthDisplayFormat='MMMM yyyy'
				rangeColors={['#42c2a4']} // TODO: $meadow
				showSelectionPreview={false}
				locale={enUS}
			/>
		</Paper>
	)
}
