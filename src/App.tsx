import React, { FC } from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import House from "./House"
import Landscape from "./Landscape"
import Screensaver from "./Screensaver"

const App: FC = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/">
        <Screensaver />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/landscape">
        <Landscape />
      </Route>
      <Route path="/house">
        <House />
      </Route>
    </Switch>
  </HashRouter>
)

export default App
