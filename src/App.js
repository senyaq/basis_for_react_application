import 'react-app-polyfill/ie11'
import React from 'react'
import { Switch, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import FancyRoute from './components/FancyRoute'

import routes from './lib/routes'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.link.color,
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <h1>Header menu (React with Redux)</h1>
      <Link className={classes.link} to="/">
        home_
      </Link>
      <Link className={classes.link} to="/about">
        _about
      </Link>

      <Switch>
        {routes.map((route, i) => (
          <FancyRoute key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
