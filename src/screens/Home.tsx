import React, { FC } from "react"
import { useHistory } from "react-router"
import HomeImg from "../assets/Home.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const Home: FC = () => {
  const history = useHistory()
  useBackToScreensaver()

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={HomeImg} alt="" />

      <Button
        id="open landscape"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          height: "100%",
          width: "50%",
        }}
        onClick={() => history.push("/landscape")}
      />

      <Button
        id="open house"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "100%",
          width: "50%",
        }}
        onClick={() => history.push("/house")}
      />
    </div>
  )
}

export default Home
