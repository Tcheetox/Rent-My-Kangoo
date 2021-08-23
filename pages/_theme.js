import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#02B182',
		},
		secondary: {
			main: '#147C6B',
		},
		error: {
			main: '#E76F51',
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
