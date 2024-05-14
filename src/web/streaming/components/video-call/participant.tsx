import { ParticipantView, useCallStateHooks } from '@stream-io/video-react-sdk'

export const Participant = () => {
  const { useParticipants } = useCallStateHooks()
  const participants = useParticipants()

  return (
    <>
      {participants.map((p) => (
        <ParticipantView
          key={p.sessionId}
          participant={p}
        />
      ))}
    </>
  )
}
