import React, { useState, useRef, useEffect } from "react";

import "./App.css";
import "./fonts/ARCADECLASSIC.TTF";

import Pad from "./features/Pad";

function App() {
  const [displayState, setDisplayState] = useState("Click or press a key!");

  function forceRerender(value) {
    setDisplayState(value);
  }

  return (
    <main className="App p-5">
      <section
        className="container mh-100 bg-warning p-4"
        style={{ maxWidth: 500 }}
        id="drum-machine"
      >
        <h1 className="mb-4">Drum Machine 3000</h1>
        <div
          className="mb-3 border bg-dark fs-1 text-warning"
          id="display"
          style={{ height: 50 }}
        >
          {displayState}
        </div>
        <div className="pad-bank">
          <div className="mx-1 row">
            <Pad
              padId={"Q"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"W"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"E"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
          </div>
          <div className="mx-1 row">
            <Pad
              padId={"A"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"S"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"D"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
          </div>
          <div className="mx-1 row">
            <Pad
              padId={"Z"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"X"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
            <Pad
              padId={"C"}
              audioSrc={
                "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
              }
              onSelect={(value) => forceRerender(value)}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
