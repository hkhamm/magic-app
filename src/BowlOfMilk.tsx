import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import BowlOfMilkSvg from "./svgs/BowlOfMilk"

const BowlOfMilk: FC = () => {
  const history = useHistory()
  return (
    <>
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
    </>
  )
}

export default BowlOfMilk
