import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import WitchBottleSvg from "./svgs/WitchBottle"

const WitchBottle: FC = () => {
  const history = useHistory()
  return (
    <>
      <Button
        label="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/home")}
      />
      <WitchBottleSvg />
    </>
  )
}

export default WitchBottle
