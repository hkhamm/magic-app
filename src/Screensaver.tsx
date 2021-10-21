import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import ScreensaverSvg from "./svgs/ScreensaverSvg"

const Screensaver: FC = () => {
  const history = useHistory()

  return (
    <div style={{ overflow: "hidden" }}>
      <Button id="open home" onClick={() => history.push("/home")}>
        <ScreensaverSvg />
      </Button>
    </div>
  )
}

export default Screensaver
