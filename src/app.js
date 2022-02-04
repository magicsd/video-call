import React, { useState } from 'react'
import Header from './components/header/header'
import Conference from './components/conference/conference'
import Statistics from './components/statistics/statistics'

import {
  onCreateOfferSuccess,
  onIceCandidate,
  onRemoteStreamReceive,
} from './helpers/peers'

const offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1,
}

let localPeer = null
let remotePeer = null

function App() {
  const [isReady, setIsReady] = useState(false)
  const [isCalling, setIsCalling] = useState(false)
  const [localStream, setLocalStream] = useState({})
  const [, setLocalScreenRef] = useState({})
  const [remoteScreenRef, setRemoteScreenRef] = useState({})
  const [startDate, setStartDate] = useState({})

  const [calls, setCalls] = useState([])

  const handleLocalScreenSet = (screen) => {
    setLocalScreenRef(screen)
    screen.current.srcObject = localStream
  }

  const handleRemoteScreenSet = (screen) => {
    setRemoteScreenRef(screen)
  }

  const initializeApp = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
      setLocalStream(stream)
      setIsReady(true)
    } catch (e) {
      alert(`getUserMedia() error: ${e.name}`)
    }
  }

  const startCall = async () => {
    localPeer = new RTCPeerConnection()
    remotePeer = new RTCPeerConnection()

    localPeer.addEventListener('icecandidate', (e) =>
      onIceCandidate(remotePeer, e),
    )
    remotePeer.addEventListener('icecandidate', (e) =>
      onIceCandidate(localPeer, e),
    )

    remotePeer.addEventListener('track', (event) =>
      onRemoteStreamReceive(remoteScreenRef, event),
    )

    localStream
      .getTracks()
      .forEach((track) => localPeer.addTrack(track, localStream))

    try {
      const offer = await localPeer.createOffer(offerOptions)
      await onCreateOfferSuccess({ offer, localPeer, remotePeer })
      setIsCalling(true)
      setStartDate(new Date())
    } catch (error) {
      console.log(`Failed to create session description: ${error.toString()}`)
    }
  }

  const endCall = () => {
    localPeer.close()
    remotePeer.close()
    localPeer = null
    remotePeer = null
    const endDate = new Date()
    const duration = endDate - startDate
    setCalls([...calls, { startDate, endDate, duration }])
    setIsCalling(false)
  }

  const removeCall = (date) => {
    setCalls(calls.filter((call) => call.startDate !== date))
  }

  return (
    <div className="p-5">
      <div className="bg-white shadow-xl rounded max-w-2xl mx-auto overflow-hidden w-full">
        <Header
          onStart={initializeApp}
          isOn={isReady}
          startCall={startCall}
          endCall={endCall}
          isCalling={isCalling}
        />
        {isReady && (
          <>
            <Conference
              setLocalScreenRef={handleLocalScreenSet}
              setRemoteScreenRef={handleRemoteScreenSet}
              localStream={localStream}
              isCalling={isCalling}
            />
            {calls.length > 0 && (
              <Statistics calls={calls} removeCall={removeCall} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
