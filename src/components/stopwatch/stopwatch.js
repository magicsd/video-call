import { useEffect, useState } from 'react'
import { getTime } from '../../helpers/get-time'

function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const [intervalId, setIntervalId] = useState(0)

  useEffect(() => {
    if (intervalId) return null

    setIntervalId(
      setInterval(() => {
        setSeconds((value) => value + 1)
      }, 1000),
    )

    return () => {
      clearInterval(intervalId)
    }
  }, [intervalId])

  return <div>{getTime(seconds)}</div>
}

export default Stopwatch
