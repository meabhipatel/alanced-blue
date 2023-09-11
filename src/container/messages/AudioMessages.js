import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js'
// import { WaveformContainer, Wave, PlayButton } from './Waveform.styled';

const AudioMessages =({ audioSrc}) => {
    const wavesurferRef = useRef(null);
    

    useEffect(() => {
        // Initialize WaveSurfer
        const wavesurfer = WaveSurfer.create({
            container: wavesurferRef.current,
            waveColor: "violet",
            progressColor: 'purple',
            barWidth: 2,
            barGap: 2,
            // backend: 'WebAudio'
            media: audioSrc

        });
        
        // Load audio from the provided URL
        wavesurfer.load(audioSrc)
        console.log(wavesurfer.load(audioSrc))
        
        return () => {
            // Clean up the WaveSurfer instance
            wavesurfer.destroy();
        }
    }, [audioSrc])
    
    return <div ref={wavesurferRef} />;
}

export default AudioMessages;