import React from 'react'

import { Paper } from '@material-ui/core'

export default function Feedback({ review: { name, date, message, profile, picture } }) {
	return <Paper>{message}</Paper>
}
