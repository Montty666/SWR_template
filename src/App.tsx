import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Header } from './components/Header'
import { About } from './components/About'
import { Home } from './components/Home'

export const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  )
}
