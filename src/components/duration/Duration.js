import './Duration.css'
import { getTime } from '../../helpers/get-time'

function Duration({ title, time }) {
  return (
    <div className="duration__wrapper">
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div>{getTime(time)}</div>
    </div>
  )
}

export default Duration
