import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  const runningTimer = useRef;
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = function () {
    runningTimer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = function () {
    clearTimeout(runningTimer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? 'Stop' : 'Start'} Challenge
      </button>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
