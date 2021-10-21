import React, { FC } from "react"
import { useHistory } from "react-router"
import KirtleImg from "../assets/Kirtle.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const Kirtle: FC = () => {
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
      <img src={KirtleImg} alt="" />
    </div>
  )
}

export default Kirtle
