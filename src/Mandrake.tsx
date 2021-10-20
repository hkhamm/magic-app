import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import MandrakeSvg from "./svgs/Mandrake"

const Mandrake: FC = () => {
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
      <MandrakeSvg />
    </>
  )
}

export default Mandrake
