const onSetSessionDescriptionError = (error) => {
  console.log(`Failed to set session description: ${error.toString()}`)
}

const onCreateAnswerSuccess = async ({ answer, localPeer, remotePeer }) => {
  try {
    await remotePeer.setLocalDescription(answer)
  } catch (e) {
    onSetSessionDescriptionError(e)
  }

  try {
    await localPeer.setRemoteDescription(answer)
  } catch (e) {
    onSetSessionDescriptionError(e)
  }
}

export const onCreateOfferSuccess = async ({
  offer,
  remotePeer,
  localPeer,
}) => {
  try {
    await localPeer.setLocalDescription(offer)
  } catch (error) {
    onSetSessionDescriptionError(error)
  }

  try {
    await remotePeer.setRemoteDescription(offer)
  } catch (error) {
    onSetSessionDescriptionError(error)
  }

  try {
    const answer = await remotePeer.createAnswer()
    await onCreateAnswerSuccess({ answer, remotePeer, localPeer })
  } catch (error) {
    onSetSessionDescriptionError(error)
  }
}

export const onIceCandidate = (peer, event) =>
  peer.addIceCandidate(event.candidate)

export const onRemoteStreamReceive = (remoteScreenRef, event) => {
  const remoteVideo = remoteScreenRef.current
  const [stream] = event.streams
  if (remoteVideo.srcObject === stream) return
  remoteVideo.srcObject = stream
}
