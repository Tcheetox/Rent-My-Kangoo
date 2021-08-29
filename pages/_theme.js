import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#42c2a4',
			dark: '#37A98F',
			contrastText: '#fff',
		},
		secondary: {
			main: '#EBEBEB',
			dark: '#D6D6D6',
		},
		error: {
			main: '#E76F51',
		},
		// success, warning, info
		background: {
			default: '#fff',
		},
	},
})

export default theme
