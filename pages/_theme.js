import { createTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		// success, warning, info
		background: {
			default: '#fff',
		},
	},
	// fontFamily: [
	// 	'-apple-system',
	// 	'BlinkMacSystemFont',
	// 	'"Segoe UI"',
	// 	'Roboto',
	// 	'"Helvetica Neue"',
	// 	'Arial',
	// 	'sans-serif',
	// 	'"Apple Color Emoji"',
	// 	'"Segoe UI Emoji"',
	// 	'"Segoe UI Symbol"',
	// ].join(','),
})

export default theme
