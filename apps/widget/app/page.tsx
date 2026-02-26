'use client'
import { useVapi } from '@/modules/widget/hooks/use-vapi'
import { Button } from '@workspace/ui/components/button'
import React from 'react'

const Page = () => {
  const { startCall, endCall, isSpeaking, isConnecting, isConnected, transcript } = useVapi();

  return (
    <div>
      <Button onClick={() => startCall()}>Start Call</Button>
      <Button onClick={() => endCall()} variant="destructive">End Call</Button>
      <div>
        <p> isConnected: {`${isConnected}`}</p>
        <p> isConnecting: {`${isConnecting}`}</p>
        <p> isSpeaking: {`${isSpeaking}`}</p>
        <div>
          {JSON.stringify(transcript, null, 2)}
        </div>
      </div>
    </div>
  )
}

export default Page