import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
import TIMER_CHALLENGES_CONTENT from './components/TimerChallangesContent.js';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {TIMER_CHALLENGES_CONTENT.map(({ title, targetTime }) => (
          <TimerChallenge title={title} targetTime={targetTime} />
        ))}
      </div>
    </>
  );
}

export default App;
