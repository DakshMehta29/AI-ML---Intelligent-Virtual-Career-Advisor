import React, { useState, useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { IAgoraRTCClient, IAgoraRTCRemoteUser } from 'agora-rtc-sdk-ng';

const VideoStream = () => {
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  const [isJoined, setIsJoined] = useState(false);
  const [error, setError] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const client = useRef(null);

  // TODO: Replace these with your actual Agora credentials
  // 1. Go to https://console.agora.io/
  // 2. Create a new project or select an existing one
  // 3. Get the App ID from Project Management > Project List
  // 4. Generate a temporary token for testing
  const appId = '358bfbea39b4492dbe7b72973fc96129'; // Your App ID from Agora Console
  const token = '007eJxTYNhwP7HigK+e6x8mrvg1uevNsxTMZC7NVX7/fIUC+3qv69cVGIxNLZLSklITjS2TTEwsjVKSUs2TzI0szY3Tki3NDI0sp87+ld4QyMjw3eYWKyMDBIL4PAwlqcUluskZiXl5qTkMDABVVyM7'; // Your temporary token
  const channel = 'test-channel';

  useEffect(() => {
    if (!appId) {
      setError('Please add your Agora App ID to the component');
      return;
    }

    // Initialize Agora client
    client.current = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

    // Set up event handlers
    client.current.on('user-published', async (user, mediaType) => {
      await client.current.subscribe(user, mediaType);
      if (mediaType === 'video') {
        setRemoteUsers((prevUsers) => [...prevUsers, user]);
      }
      if (mediaType === 'audio') {
        user.audioTrack?.play();
      }
    });

    client.current.on('user-unpublished', (user) => {
      setRemoteUsers((prevUsers) => prevUsers.filter((u) => u.uid !== user.uid));
    });

    return () => {
      localVideoTrack?.close();
      localAudioTrack?.close();
      client.current?.leave();
    };
  }, []);

  const toggleMute = async () => {
    if (localAudioTrack) {
      await localAudioTrack.setEnabled(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = async () => {
    if (localVideoTrack) {
      await localVideoTrack.setEnabled(!isVideoOff);
      setIsVideoOff(!isVideoOff);
    }
  };

  const joinChannel = async () => {
    try {
      if (!appId) {
        throw new Error('App ID is required');
      }

      // Join the channel
      await client.current.join(appId, channel, token, null);

      // Create and publish local tracks
      const videoTrack = await AgoraRTC.createCameraVideoTrack();
      const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();

      setLocalVideoTrack(videoTrack);
      setLocalAudioTrack(audioTrack);

      await client.current.publish([videoTrack, audioTrack]);
      setIsJoined(true);
      setError(null);
    } catch (error) {
      console.error('Error joining channel:', error);
      setError(`Error joining channel: ${error.message}`);
    }
  };

  const leaveChannel = async () => {
    try {
      localVideoTrack?.close();
      localAudioTrack?.close();
      await client.current.leave();
      setLocalVideoTrack(null);
      setLocalAudioTrack(null);
      setRemoteUsers([]);
      setIsJoined(false);
      setIsMuted(false);
      setIsVideoOff(false);
      setError(null);
    } catch (error) {
      console.error('Error leaving channel:', error);
      setError(`Error leaving channel: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Live Streaming</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!appId && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">
              Please add your Agora App ID and token to the component. You can get these from the Agora Console.
            </span>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Local video */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">You</h2>
            {localVideoTrack && (
              <div
                ref={(ref) => {
                  if (ref) {
                    localVideoTrack.play(ref);
                  }
                }}
                className="w-full h-64 rounded-lg"
              />
            )}
          </div>

          {/* Remote videos */}
          {remoteUsers.map((user) => (
            <div key={user.uid} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">User {user.uid}</h2>
              <div
                ref={(ref) => {
                  if (ref && user.videoTrack) {
                    user.videoTrack.play(ref);
                  }
                }}
                className="w-full h-64 rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4 justify-center">
          {!isJoined ? (
            <button
              onClick={joinChannel}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              disabled={!appId}
            >
              Join Channel
            </button>
          ) : (
            <>
              <button
                onClick={toggleMute}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  isMuted ? 'bg-red-500' : 'bg-green-500'
                } text-white hover:bg-opacity-90`}
              >
                {isMuted ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Unmute
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                    Mute
                  </>
                )}
              </button>

              <button
                onClick={toggleVideo}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                  isVideoOff ? 'bg-red-500' : 'bg-green-500'
                } text-white hover:bg-opacity-90`}
              >
                {isVideoOff ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Show Video
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    Hide Video
                  </>
                )}
              </button>

              <button
                onClick={leaveChannel}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Leave Channel
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoStream; 