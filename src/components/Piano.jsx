import React from 'react';
import { useState } from 'react';

import './styles.css';


import soundA from './sounds/A.wav';
import soundASharp from './sounds/Asharp.wav';
import soundB from './sounds/B.wav';
import soundC from './sounds/C.wav';
import soundCSharp from './sounds/Csharp.wav';
import soundD from './sounds/D.wav';
import soundDSharp from './sounds/Dsharp.wav';
import soundE from './sounds/E.wav';
import soundF from './sounds/F.wav';
import soundFSharp from './sounds/Fsharp.wav';
import soundG from './sounds/G.wav';
import soundGSharp from './sounds/Gsharp.wav';

const Piano = () => {


  const [volume, setVolume] = useState(0.5); // Initial volume value

  const playNote = (note) => {
    const audioElement = new Audio(note);
    audioElement.volume = volume; // Set the volume value
    audioElement.play();
  };

  const handleKeyDown = (event) => {
    const note = event.target.getAttribute('data-note');
    event.target.classList.add('down');
    playNote(note);
  };

  const handleKeyUp = (event) => {
    event.target.classList.remove('down');
  };

  const handleVolumeChange = (event) => {
    const vol = event.target.value / 100; // Normalize the volume value between 0 and 1
    setVolume(vol);
  };

  return (
    <div>
      <h2>PLAYABLE PIANO</h2>
      <div className="container">
        <div className="controls">
          <div className="slider">
            <label className="volumetext" htmlFor="volumeSlider">
              Volume:
            </label>
            {/* Volume Slider */}
            <input
              id="volume"
              type="range"
              min="0"
              max="100"
              value={volume * 100} 
              onChange={handleVolumeChange} // Handle volume change
            />
          </div>
        </div>

        <ul className="keys">
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundC}></li>
          <li className="key black" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundCSharp}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundD}></li>
          <li className="key black" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundDSharp}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundE}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundF}></li>
          <li className="key black" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundFSharp}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundG}></li>
          <li className="key black" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundGSharp}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundA}></li>
          <li className="key black" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundASharp}></li>
          <li className="key white" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp} data-note={soundB}></li>
        </ul>
      </div>
    </div>
  );
};

export default Piano;
