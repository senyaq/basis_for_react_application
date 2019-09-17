import 'react-app-polyfill/ie11'
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Home from './pages'
import About from './pages/about'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.link.color,
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <h1>Header menu</h1>
      <Link className={classes.link} to="/">
        home_
      </Link>
      <Link className={classes.link} to="/about">
        _about
      </Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App
