import { extendTheme } from '@chakra-ui/react';
import '@fontsource/manrope';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    spinwash: {
      100: '#E1F6FF',
      200: '#BFDBE8',
      300: '#7FD0F9',
      400: '#2B5EB9',
      500: '#1B4D7A',
    },
  },
  fonts: {
    body: 'Manrope',
  },
  styles: {
    global: {
      'html, body': {
        // fontFamily: 'sans',
        background: '#ffffff',
        color: '#1B4D7A',
      },
    },
  },
});

export default theme;
