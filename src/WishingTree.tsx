import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import WishingTreeSvg from "./svgs/WishingTree"

const WishingTree: FC = () => {
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
      <WishingTreeSvg />
    </>
  )
}

export default WishingTree
