import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import AndresCrossSvg from "./svgs/AndrewsCross"

const AndrewsCross: FC = () => {
  const history = useHistory()
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
      <AndresCrossSvg />
    </div>
  )
}

export default AndrewsCross
