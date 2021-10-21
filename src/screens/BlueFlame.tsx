import React, { FC } from "react"
import { useHistory } from "react-router"
import BlueFlameImg from "../assets/Blue_Flame.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const BlueFlame: FC = () => {
  const history = useHistory()
  useBackToScreensaver()
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Button
        id="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/landscape")}
      />
      <img src={BlueFlameImg} alt="" />
    </div>
  )
}

export default BlueFlame
