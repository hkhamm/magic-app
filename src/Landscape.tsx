import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import LandscapeSvg from "./svgs/LandscapeSvg"

const Landscape: FC = () => {
  const history = useHistory()
  return (
    <div style={{ position: "relative" }}>
      <Button
        id="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 19,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/home")}
      />
      <Button
        id="mermaid"
        style={{
          position: "absolute",
          left: 58,
          bottom: 142,
          height: 177,
          width: 217,
        }}
        onClick={() => history.push("/mermaid")}
      />
      <Button
        id="mandrake"
        style={{
          position: "absolute",
          left: 268,
          bottom: 490,
          height: 60,
          width: 90,
        }}
        onClick={() => history.push("/mandrake")}
      />
      <Button
        id="blue-flame"
        style={{
          position: "absolute",
          left: 508,
          bottom: 466,
          height: 80,
          width: 56,
        }}
        onClick={() => history.push("/blue-flame")}
      />
      <Button
        id="blue-flame"
        style={{
          position: "absolute",
          left: 508,
          bottom: 466,
          height: 80,
          width: 56,
        }}
        onClick={() => history.push("/blue-flame")}
      />
      <Button
        id="kelpie"
        style={{
          position: "absolute",
          left: 595,
          bottom: 559,
          height: 122,
          width: 139,
        }}
        onClick={() => history.push("/kelpie")}
      />
      <Button
        id="will-o-wisps"
        style={{
          position: "absolute",
          left: 816,
          bottom: 453,
          height: 101,
          width: 181,
        }}
        onClick={() => history.push("/will-o-wisps")}
      />
      <Button
        id="wishing-tree"
        style={{
          position: "absolute",
          left: 1008,
          bottom: 214,
          height: 477,
          width: 201,
        }}
        onClick={() => history.push("/wishing-tree")}
      />
      <Button
        id="buttercat"
        style={{
          position: "absolute",
          left: 1411,
          bottom: 153,
          height: 154,
          width: `53`,
        }}
        onClick={() => history.push("/buttercat")}
      />
      <Button
        id="fairy-ring"
        style={{
          position: "absolute",
          left: 1561,
          bottom: 565,
          height: 149,
          width: 164,
        }}
        onClick={() => history.push("/fairy-ring")}
      />
      <Button
        id="wild-hunt"
        style={{
          position: "absolute",
          left: 1614,
          bottom: 778,
          height: 92,
          width: 189,
        }}
        onClick={() => history.push("/wild-hunt")}
      />
      <LandscapeSvg />
    </div>
  )
}

export default Landscape
