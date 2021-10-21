import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import FairyRingSvg from "./svgs/FairyRing"
import { useBackToScreensaver } from "./useBackToHome"

const FairyRing: FC = () => {
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
      <FairyRingSvg />
    </>
  )
}

export default FairyRing
