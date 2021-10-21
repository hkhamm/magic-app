import React, { FC } from "react"
import { useHistory } from "react-router"
import WishingTreeImg from "../assets/Wishing_Tree.png"
import Button from "../Button"
import { useBackToScreensaver } from "../useBackToScreensaver"

const WishingTree: FC = () => {
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
        onClick={() => history.push("/landscape")}
      />
      <img src={WishingTreeImg} alt="" />
    </div>
  )
}

export default WishingTree
