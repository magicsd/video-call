import CallControls from './call-controls'
import Screen from '../screen/screen'

function Conference({
  setLocalScreenRef,
  setRemoteScreenRef,
  startCall,
  endCall,
  isCalling,
}) {
  return (
    <div className="flex justify-between p-5">
      <Screen
        setScreenRef={setLocalScreenRef}
        videoProps={{ playsInline: true, autoPlay: true, muted: true }}
      />
      <CallControls
        isCalling={isCalling}
        startCall={startCall}
        endCall={endCall}
      />
      <Screen
        setScreenRef={setRemoteScreenRef}
        videoProps={{ playsInline: true, autoPlay: true }}
      />
    </div>
  )
}

export default Conference
