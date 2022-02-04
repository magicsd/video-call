import { getTime } from '../../helpers/get-time'

function Duration({ title, time }) {
  return (
    <div className="flex gap-1">
      <div className="font-semibold">{title}</div>
      <div>{getTime(time)}</div>
    </div>
  )
}

export default Duration
