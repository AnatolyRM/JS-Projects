function getParticipants(handshakes) {
  let person = 0
  let handshake = 0

  while (handshake < handshakes){
    person += 1
    handshake += (person - 1)
  }

  return person
}
