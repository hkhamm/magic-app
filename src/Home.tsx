import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import HomeSvg from "./svgs/HomeSvg"

const Home: FC = () => {
  const history = useHistory()

  return (
    <div style={{ position: "relative" }}>
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
