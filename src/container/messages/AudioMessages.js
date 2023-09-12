import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import file_example_MP3_5MG from '../../components/images/file_example_MP3_5MG.mp3';

const AudioMessages = () => {
  const waveSurferRef = useRef(null);

  useEffect(() => {
    // Create WaveSurfer instance after the component mounts
    const wavesurfer = WaveSurfer.create({
      container: '#waveform', // Make sure you have a <div id="waveform"></div> in your component's JSX
      waveColor: '#C9C9C9',
      progressColor: '#031136',
      cursorWidth:0,
      cursorColor: 'transparent',
      barWidth:2,
      backend: 'WebAudio', // Choose an appropriate backend (WebAudio or MediaElement)
      mediaType: 'audio', // Specify the media type as 'audio'
      responsive: true, // Make the waveform responsive to container size changes
    });

    // Set the ref to the created instance
    waveSurferRef.current = wavesurfer;

    // Load the audio file
    wavesurfer.load(file_example_MP3_5MG);

    // Clean up when the component unmounts
    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
      }
    };
  }, []); // Empty dependency array to run this effect only once, when the component mounts

  // Function to handle audio play/pause
  const togglePlay = () => {
    if (waveSurferRef.current) {
      if (waveSurferRef.current.isPlaying()) {
        waveSurferRef.current.pause();
      } else {
        waveSurferRef.current.play();
      }
    }
  };

  return (
    <div className='flex'>
      
      <div id="waveform" className='w-96 mr-2'></div>
      <button onClick={togglePlay}>Toggle Play</button>
      {/* You can add any other content or controls here */}
    </div>
  );
};

export default AudioMessages;
