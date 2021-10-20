import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import LandscapeSvg from "./svgs/LandscapeSvg"

const Landscape: FC = () => {
  const history = useHistory()
  return (
    <div style={{ position: "relative" }}>
      <Button
        id="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/home")}
      />
      <LandscapeSvg />
    </div>
  )
}

export default Landscape
