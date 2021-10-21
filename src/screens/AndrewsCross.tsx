import React, { FC } from "react"
import { useHistory } from "react-router"
import AndresCrossImg from "../assets/Andrews_Cross.png"
import Button from "../Button"

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
      <img src={AndresCrossImg} alt="" />
    </div>
  )
}

export default AndrewsCross
