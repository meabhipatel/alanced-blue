import React, { useState, useEffect } from 'react';
import AudioPlayer from 'react-audio-player';
import AudioSpectrum from 'react-audio-spectrum';

const AudioVisualizer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to handle audio play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioElement = document.getElementById('audio-element');

    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div>
      <AudioPlayer
        id="audio-element"
        src={audioSrc}
        autoPlay={false}
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button onClick={togglePlay}>
        {/* {isPlaying ? 'Pause' : 'Play'} */}
      </button>
      <AudioSpectrum
        id="audio-spectrum"
        height={50}
        width={300}
        audioId={'audio-element'}
        capColor={'#3A4256'}
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: '#f00' },
          { stop: 0.5, color: '#0f0' },
          { stop: 1, color: '#00f' },
        ]}
        gap={4}
      />
    </div>
  );
};

export default AudioVisualizer;
