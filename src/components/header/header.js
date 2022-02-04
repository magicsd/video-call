import Icon from '../icon'
import Stopwatch from '../stopwatch/stopwatch'

function Header({ onStart, isOn, isCalling, endCall, startCall }) {
  return (
    <div className="flex gap-4 h-16 items-center px-5">
      <div className="font-semibold text-2xl flex-1">Magic Video Calls</div>

      {!isOn && (
        <Icon
          onClick={onStart}
          icon="log-in"
          type="outline"
          className="text-blue-700"
        />
      )}

      {isOn &&
        (isCalling ? (
          <>
            <Stopwatch />
            <Icon
              onClick={endCall}
              icon="cloud-offline"
              className="text-red-700"
              type="outline"
            />
          </>
        ) : (
          <Icon onClick={startCall} icon="call" className="text-green-700" />
        ))}
    </div>
  )
}

export default Header
