import classnames from 'classnames'

const sizes = {
  xs: 'h-4 text-xl w-4',
  sm: 'h-6 text-2xl w-6',
  lg: 'h-8 text-3xl w-8',
}

// outline, filled, sharp
function Icon({ icon, className, type, size = 'lg', ...props }) {
  return (
    <button
      className={classnames(
        'flex-none flex items-center justify-center',
        'hover:opacity-70 transition-all duration-150',
        sizes[size],
        className,
      )}
      type="button"
      {...props}
    >
      <ion-icon name={type ? `${icon}-${type}` : icon} />
    </button>
  )
}

export default Icon
