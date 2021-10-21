import React, { FC } from "react"
import { useHistory } from "react-router"
import Button from "./Button"
import HouseSvg from "./svgs/HouseSvg"
import { useBackToScreensaver } from "./useBackToScreensaver"

const House: FC = () => {
  const history = useHistory()
  useBackToScreensaver()
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <Button
        id="back"
        style={{
          position: "absolute",
          left: 23,
          bottom: 26,
          height: 92,
          width: 198,
        }}
        onClick={() => history.push("/home")}
      />
      <Button
        id="andrews-cross"
        style={{
          position: "absolute",
          left: 414,
          bottom: 719,
          height: 134,
          width: 50,
        }}
        onClick={() => history.push("/andrews-cross")}
      />
      <Button
        id="fairy-loaf"
        style={{
          position: "absolute",
          left: 464,
          bottom: 549,
          height: 50,
          width: 50,
        }}
        onClick={() => history.push("/fairy-loaf")}
      />
      <Button
        id="witch-bottle"
        style={{
          position: "absolute",
          left: 629,
          bottom: 758,
          height: 60,
          width: 53,
        }}
        onClick={() => history.push("/witch-bottle")}
      />
      <Button
        id="bowl-of-milk"
        style={{
          position: "absolute",
          left: 511,
          bottom: 376,
          height: 60,
          width: 80,
        }}
        onClick={() => history.push("/bowl-of-milk")}
      />
      <Button
        id="snails"
        style={{
          position: "absolute",
          left: 604,
          bottom: 172,
          height: 88,
          width: 64,
        }}
        onClick={() => history.push("/snails")}
      />
      <Button
        id="cross"
        style={{
          position: "absolute",
          left: 938,
          bottom: 649,
          height: 101,
          width: 75,
        }}
        onClick={() => history.push("/cross")}
      />
      <Button
        id="cat-skull"
        style={{
          position: "absolute",
          left: 1120,
          bottom: 647,
          height: 45,
          width: 64,
        }}
        onClick={() => history.push("/cat-skull")}
      />
      <Button
        id="shoe"
        style={{
          position: "absolute",
          left: 1193,
          bottom: 641,
          height: 45,
          width: 80,
        }}
        onClick={() => history.push("/shoe")}
      />
      <Button
        id="kirtle"
        style={{
          position: "absolute",
          left: 956,
          bottom: 361,
          height: 117,
          width: 372,
        }}
        onClick={() => history.push("/kirtle")}
      />
      <Button
        id="chamber-pot"
        style={{
          position: "absolute",
          left: 1066,
          bottom: 270,
          height: 88,
          width: 105,
        }}
        onClick={() => history.push("/chamber-pot")}
      />
      <Button
        id="bread"
        style={{
          position: "absolute",
          left: 1334,
          bottom: 352,
          height: 71,
          width: 74,
        }}
        onClick={() => history.push("/bread")}
      />
      <HouseSvg />
    </div>
  )
}

export default House
