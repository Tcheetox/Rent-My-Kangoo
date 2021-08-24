import React, { useState } from 'react'

// https://github.com/Kiarash-Z/react-modern-calendar-datepicker
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar as ModernCalendar, utils } from 'react-modern-calendar-datepicker'
import styles from '../../styles/blocks/calendar.module.scss'

export default function Calendar({ availabilityDates: unavailable }) {
	const [selectedDayRange, setSelectedDayRange] = useState({ from: null, to: null })

	return (
		<div className={styles.calendar}>
			<ModernCalendar
				value={selectedDayRange}
				onChange={setSelectedDayRange}
				disabledDays={unavailable}
				minimumDate={utils().getToday()}
				shouldHighlightWeekends
			/>
		</div>
	)
}
