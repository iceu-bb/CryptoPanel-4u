import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fefefe',
  dark: '#17181B'
});

export const fontColor = theme('mode', {
  light: '#0E0E10',
  dark: '#eee'
});

export const borderColor = theme('mode', {
  light: '#ddd',
  dark: '#333'
});
