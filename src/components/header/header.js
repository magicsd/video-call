import Icon from '../icon'

function Header({ onStart, isOn, isCalling, endCall, startCall }) {
  return (
    <div className="flex h-20 items-center justify-between px-5">
      <div className="font-semibold text-2xl">Magic Video Calls</div>
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
          <Icon
            onClick={endCall}
            icon="cloud-offline"
            className="text-red-700"
            type="outline"
          />
        ) : (
          <Icon onClick={startCall} icon="call" className="text-green-700" />
        ))}
    </div>
  )
}

export default Header
