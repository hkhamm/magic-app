import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import HouseSvg from "./svgs/HouseSvg"

const House: FC = () => {
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
      <Button
        id="andrews-cross"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
          border: "2px solid red",
        }}
        onClick={() => history.push("/andrews-cross")}
      />
      <HouseSvg />
    </div>
  )
}

export default House
