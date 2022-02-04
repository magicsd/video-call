import { useLayoutEffect, useRef } from 'react'
import './Screen.css'

function Screen({ setScreenRef, videoProps = {} }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    setScreenRef(ref)
  }, [])

  return (
    <div className="screen">
      <video
        ref={ref}
        style={{ width: 320, height: 240, borderRadius: 15 }}
        {...videoProps}
      />
    </div>
  )
}

export default Screen
