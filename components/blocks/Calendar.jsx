import React, { useState } from 'react'

// https://github.com/Kiarash-Z/react-modern-calendar-datepicker
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar as ModernCalendar, utils } from 'react-modern-calendar-datepicker'

// https://www.npmjs.com/package/react-date-range
import { DateRangePicker } from 'react-date-range'
import styles from '../../styles/blocks/calendar.module.scss'

export default function Calendar({ availabilityDates: unavailable }) {
	const [selectedDayRange, setSelectedDayRange] = useState({ from: null, to: null })

	const selectionRange = {
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	}
	// TODO: check locale?

	// TODO: add min and max dates
	// TODO: add disabledDates
	return (
		<div className={styles.calendar}>
			<ModernCalendar
				value={selectedDayRange}
				onChange={setSelectedDayRange}
				disabledDays={unavailable}
				minimumDate={utils().getToday()}
				shouldHighlightWeekends
			/>
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={e => console.log(e)}
				months={2}
				showMonthAndYearPickers={false}
				direction='horizontal'
				showDateDisplay={false}
				showPreview={true}
				dragSelectionEnabled={true}
				weekStartsOn={1}
			/>
			{/* <ModernCalendar /> */}
			{/* <ModernCalendar
				value={selectedDayRange}
				onChange={setSelectedDayRange}
				disabledDays={unavailable}
				minimumDate={utils().getToday()}
				shouldHighlightWeekends
			/> */}
		</div>
	)
}
