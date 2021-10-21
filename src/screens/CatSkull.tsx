import React, { FC } from "react"
import { useHistory } from "react-router"
import CatSkullImg from "../assets/Cat_Skull.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const CatSkull: FC = () => {
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
        onClick={() => history.push("/house")}
      />
      <img src={CatSkullImg} alt="" />
    </div>
  )
}

export default CatSkull
