import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import WildHuntSvg from "./svgs/WildHunt"
import { useBackToScreensaver } from "./useBackToHome"

const WildHunt: FC = () => {
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
      <WildHuntSvg />
    </>
  )
}

export default WildHunt
