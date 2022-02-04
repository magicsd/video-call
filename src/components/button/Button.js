import './Button.css'

import classnames from 'classnames'

function Button({ children, variant = 'conference__button', ...props }) {
  return (
    <button className={classnames('button', variant)} type="button" {...props}>
      {children}
    </button>
  )
}

export default Button
