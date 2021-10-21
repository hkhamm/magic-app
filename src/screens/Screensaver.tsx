import React, { FC } from "react"
import { useHistory } from "react-router"
import ScreensaverImg from "../assets/Screensaver.png"
import Button from "../Button"

const Screensaver: FC = () => {
  const history = useHistory()

  return (
    <div style={{ overflow: "hidden" }}>
      <Button id="open home" onClick={() => history.push("/home")}>
        <img src={ScreensaverImg} alt="" />
      </Button>
    </div>
  )
}

export default Screensaver
