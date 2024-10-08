import { useState } from "react"

const useCounterHook = () => {
  const [count, SetCount] = useState(0)

  const increment = () => {
    SetCount((prev) => prev + 1)
  }

  const decrement = () => {
    SetCount((prev) => prev - 1)
  }

  return {count, increment, decrement}
}

export default useCounterHook