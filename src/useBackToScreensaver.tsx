import { useEffect, useRef } from "react"
import { useHistory } from "react-router"

export function useBackToScreensaver() {
  let timerRef = useRef<number>()
  const history = useHistory()
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      clearTimeout(timerRef.current)
      history.push("/")
    }, 600000)
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])
}
