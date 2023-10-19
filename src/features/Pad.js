import React, { useEffect } from "react";

export default function Pad({ padId, audioSrc, onSelect }) {
  const activatePad = () => {
    const displayString = audioSrc
      .slice(audioSrc.lastIndexOf("/") + 1)
      .replace(".mp3", "")
      .replaceAll("_", " ");
    onSelect(displayString);
    document.querySelector(`audio[src="${audioSrc}"]`).play();
  };

  useEffect(() => {
    function handleKeyPress(e) {
      const keyId = e.key.toUpperCase();
      if (keyId !== padId) return;
      activatePad();
    }

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <button
      onClick={activatePad}
      style={{ aspectRatio: 1 }}
      className="drum-pad btn btn-light btn-lg col m-2 fs-1 fw-bold"
      id={`${padId}-pad`}
    >
      <audio className="clip" id={padId} src={audioSrc}></audio>
      {padId}
    </button>
  );
}
