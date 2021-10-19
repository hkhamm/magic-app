import React, { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Home"
import House from "./House"
import Landscape from "./Landscape"
import Screensaver from "./Screensaver"

const App: FC = () => (
  <BrowserRouter>
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
  </BrowserRouter>
)

export default App
