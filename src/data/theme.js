import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fefefe',
  dark: '#282828'
});

export const fontColor = theme('mode', {
  light: '#0E0E10',
  dark: '#eee'
});

export const borderColor = theme('mode', {
  light: '#ddd',
  dark: '#333'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#ecf4f3',
  dark: '#5f6769'
});

export const ScrollTopColor = theme('mode', {
  light: '#fff',
  dark: '#17181b'
});

export const ScrollTopBackgroundColor = theme('mode', {
  light: 'rgba(23,24,27,0.85)',
  dark: ' #727272'
});

export const LoaderColor = theme('mode', {
  light: '#2D7DF8',
  dark: '#fff'
});
