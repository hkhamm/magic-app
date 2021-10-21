import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import ChamberPotSvg from "./svgs/ChamberPot"
import { useBackToScreensaver } from "./useBackToHome"

const ChamberPot: FC = () => {
  const history = useHistory()
  useBackToScreensaver()
  return (
    <>
      <Button
        id="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/house")}
      />
      <ChamberPotSvg />
    </>
  )
}

export default ChamberPot
