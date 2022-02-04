import Button from '../button/button'

function Header({ onStart, isOn }) {
  return (
    <div className="flex h-20 items-center justify-between px-5">
      <div className="font-semibold text-2xl">Magic Video Calls</div>
      {!isOn && <Button onClick={onStart}>Turn On</Button>}
    </div>
  )
}

export default Header
