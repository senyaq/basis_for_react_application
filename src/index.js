import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import './style//index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'

import { defaultTheme } from './lib/theme'
import store from './store/index'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
