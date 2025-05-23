import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// Optional: configure light/dark mode
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e3f9ff',
      100: '#b3e7fb',
      500: '#0ca6e9',
      700: '#086fad',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
})


export default theme
