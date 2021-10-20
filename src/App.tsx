import React, { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AndrewsCross from "./AndrewsCross"
import BlueFlame from "./BlueFlame"
import BowlOfMilk from "./BowlOfMilk"
import Bread from "./Bread"
import Buttercat from "./Buttercat"
import CatSkull from "./CatSkull"
import ChamberPot from "./ChamberPot"
import FairyLoaf from "./FairyLoaf"
import FairyRing from "./FairyRing"
import Home from "./Home"
import House from "./House"
import Kelpie from "./Kelpie"
import Kirtle from "./Kirtle"
import Landscape from "./Landscape"
import Mandrake from "./Mandrake"
import Mermaid from "./Mermaid"
import Screensaver from "./Screensaver"
import Shoes from "./Shoes"
import Snails from "./Snails"
import WildHunt from "./WildHunt"
import WillOWisps from "./WillOWisps"
import WishingTree from "./WishingTree"
import WitchBottle from "./WitchBottle"

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
      <Route path="/andrews-cross">
        <AndrewsCross />
      </Route>
      <Route path="/blue-flame">
        <BlueFlame />
      </Route>
      <Route path="/bowl-of-milk">
        <BowlOfMilk />
      </Route>
      <Route path="/bread">
        <Bread />
      </Route>
      <Route path="/buttercat">
        <Buttercat />
      </Route>
      <Route path="/cat-skull">
        <CatSkull />
      </Route>
      <Route path="/chamber-pot">
        <ChamberPot />
      </Route>
      <Route path="/fairy-loaf">
        <FairyLoaf />
      </Route>
      <Route path="/fairy-ring">
        <FairyRing />
      </Route>
      <Route path="/kelpie">
        <Kelpie />
      </Route>
      <Route path="/kirtle">
        <Kirtle />
      </Route>
      <Route path="/mandrake">
        <Mandrake />
      </Route>
      <Route path="/mermaid">
        <Mermaid />
      </Route>
      <Route path="/shoes">
        <Shoes />
      </Route>
      <Route path="/snails">
        <Snails />
      </Route>
      <Route path="/wild-hunt">
        <WildHunt />
      </Route>
      <Route path="/will-o-wisps">
        <WillOWisps />
      </Route>
      <Route path="/wishing-tree">
        <WishingTree />
      </Route>
      <Route path="/witch-bottle">
        <WitchBottle />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
