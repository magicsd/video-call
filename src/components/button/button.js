import classnames from 'classnames'

// eslint-disable-next-line no-unused-vars
function Button({ children, className, variant = 'primary', ...props }) {
  return (
    <button
      className={classnames(
        'text-sm font-semibold bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600',
        'transition-all duration-150',
        className,
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
