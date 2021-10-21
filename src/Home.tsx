import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import HomeSvg from "./svgs/HomeSvg"
import { useBackToScreensaver } from "./useBackToScreensaver"

const Home: FC = () => {
  const history = useHistory()
  useBackToScreensaver()

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <HomeSvg />

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
