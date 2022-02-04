import { useLayoutEffect, useRef } from 'react'

function Screen({ setScreenRef, videoProps = {} }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    setScreenRef(ref)
  }, [])

  return (
    <video className="h-[240px] rounded w-[320px]" ref={ref} {...videoProps} />
  )
}

export default Screen
