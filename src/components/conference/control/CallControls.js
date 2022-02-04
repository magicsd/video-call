import Button from '../../button/Button'
import Stopwatch from '../../stopwatch/Stopwatch'

function CallControls({ startCall, endCall, isCalling }) {
  return (
    <div className="buttons__wrapper">
      <Button onClick={isCalling ? endCall : startCall} style={{ width: 150 }}>
        {isCalling ? 'End Call' : 'Start Call'}
      </Button>
      {isCalling && <Stopwatch />}
    </div>
  )
}

export default CallControls
