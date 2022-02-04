import Button from '../button/button'
import Stopwatch from '../stopwatch/stopwatch'

function CallControls({ startCall, endCall, isCalling }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Button onClick={isCalling ? endCall : startCall}>
        {isCalling ? 'End Call' : 'Start Call'}
      </Button>
      {isCalling && <Stopwatch />}
    </div>
  )
}

export default CallControls
