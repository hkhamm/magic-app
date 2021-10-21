import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import BowlOfMilkSvg from "./svgs/BowlOfMilk"
import { useBackToScreensaver } from "./useBackToHome"

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
      <BowlOfMilkSvg />
    </div>
  )
}

export default BowlOfMilk
