import Screen from '../screen/screen'

function Conference({ setLocalScreenRef, setRemoteScreenRef, isCalling }) {
  return (
    <div className="p-5 relative">
      <Screen
        className={
          isCalling ? 'absolute top-8 right-8 w-[30%] shadow-xl' : 'w-full'
        }
        setScreenRef={setLocalScreenRef}
        playsInline
        autoPlay
        muted
      />
      <Screen
        className={isCalling ? 'w-full' : 'hidden'}
        setScreenRef={setRemoteScreenRef}
        playsInline
        autoPlay
      />
    </div>
  )
}

export default Conference
