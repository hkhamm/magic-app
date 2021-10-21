import React, { FC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AndrewsCross from "./screens/AndrewsCross"
import BlueFlame from "./screens/BlueFlame"
import BowlOfMilk from "./screens/BowlOfMilk"
import Bread from "./screens/Bread"
import Buttercat from "./screens/Buttercat"
import CatSkull from "./screens/CatSkull"
import ChamberPot from "./screens/ChamberPot"
import Cross from "./screens/Cross"
import FairyLoaf from "./screens/FairyLoaf"
import FairyRing from "./screens/FairyRing"
import Home from "./screens/Home"
import House from "./screens/House"
import Kelpie from "./screens/Kelpie"
import Kirtle from "./screens/Kirtle"
import Landscape from "./screens/Landscape"
import Mandrake from "./screens/Mandrake"
import Mermaid from "./screens/Mermaid"
import Screensaver from "./screens/Screensaver"
import Shoes from "./screens/Shoes"
import Snails from "./screens/Snails"
import WildHunt from "./screens/WildHunt"
import WillOWisps from "./screens/WillOWisps"
import WishingTree from "./screens/WishingTree"
import WitchBottle from "./screens/WitchBottle"

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
      <Route path="/cross">
        <Cross />
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
      <Route path="/shoe">
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
