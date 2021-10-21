import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import MandrakeSvg from "./svgs/Mandrake"
import { useBackToScreensaver } from "./useBackToHome"

const Mandrake: FC = () => {
  const history = useHistory()
  useBackToScreensaver()
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
        onClick={() => history.push("/landscape")}
      />
      <MandrakeSvg />
    </>
  )
}

export default Mandrake
