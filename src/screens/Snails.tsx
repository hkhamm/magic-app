import React, { FC } from "react"
import { useHistory } from "react-router"
import SnailsImg from "../assets/Snails.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const Snails: FC = () => {
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
      <img src={SnailsImg} alt="" />
    </div>
  )
}

export default Snails
