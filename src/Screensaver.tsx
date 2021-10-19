import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import ScreensaverSvg from "./svgs/ScreensaverSvg"

const Screensaver: FC = () => {
  const history = useHistory()

  return (
    <Button label="open home" onClick={() => history.push("/home")}>
      <ScreensaverSvg />
    </Button>
  )
}

export default Screensaver
