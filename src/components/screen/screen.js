import { useLayoutEffect, useRef } from 'react'
import classnames from 'classnames'

function Screen({ setScreenRef, className = 'h-[240px] w-[320px]', ...props }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    setScreenRef(ref)
  }, [])

  return (
    <video
      className={classnames(
        'rounded-md transition-all duration-500',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}

export default Screen
