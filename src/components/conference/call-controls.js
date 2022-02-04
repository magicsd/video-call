import Stopwatch from '../stopwatch/stopwatch'
import Icon from '../icon'

function CallControls({ startCall, endCall, isCalling }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      {isCalling ? (
        <Icon onClick={endCall} icon="ban" className="text-red-700" />
      ) : (
        <Icon onClick={startCall} icon="call" className="text-green-700" />
      )}
      {isCalling && <Stopwatch />}
    </div>
  )
}

export default CallControls
