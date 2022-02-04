import Stopwatch from '../stopwatch/stopwatch'

function CallControls({ isCalling }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {isCalling && <Stopwatch />}
    </div>
  )
}

export default CallControls
