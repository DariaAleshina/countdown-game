import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [playerNameTyped, setPlayerNameTyped] = useState(null);

  const handleClick = function (event) {
    setPlayerNameTyped(playerName.current.value);
  };

  return (
    <section id="player">
      <h2>Welcome {playerNameTyped ?? 'Unknown Entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
