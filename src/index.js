import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LanguageProvider } from './context/LanguageContext';
import { MyThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <MyThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </MyThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
