import React, { FC } from "react"
import { useHistory } from "react-router"
import BowlOfMilkImg from "../assets/Bowl_of_Milk.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const BowlOfMilk: FC = () => {
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
      <img src={BowlOfMilkImg} alt="" />
    </div>
  )
}

export default BowlOfMilk
