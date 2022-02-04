import CallControls from './control/CallControls'
import Screen from '../screen/Screen'

import './Conference.css'

function Conference({
  setLocalScreenRef,
  setRemoteScreenRef,
  startCall,
  endCall,
  isCalling,
}) {
  return (
    <div className="wrapper">
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
