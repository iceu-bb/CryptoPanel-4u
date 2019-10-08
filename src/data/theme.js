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
