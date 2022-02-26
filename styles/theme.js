import { createTheme } from '@mui/material/styles'

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
            main: '#F33829',
        },
        // success, warning, info
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontFamily: ['"Open Sans", sans-serif'],
    },
})

export default theme
