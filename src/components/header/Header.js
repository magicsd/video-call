import './Header.css'
import Button from '../button/Button'

function Header({ onStart, isOn }) {
  return (
    <div className="header__wrapper">
      <h1 className="header__title">Verona Video Calls</h1>
      {!isOn && (
        <Button variant="header__button" onClick={onStart}>
          Turn On
        </Button>
      )}
    </div>
  )
}

export default Header
