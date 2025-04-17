import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  const userWin = remainingTime > 0;
  const remainingTimeFormatted = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  console.log('score: ', score);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>You {userWin ? `won. Score: ${score}` : 'lost'}</h2>
      <p>
        The target time was{' '}
        <strong>
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </strong>
      </p>
      <p>
        You stopped the timer{' '}
        <strong>{remainingTimeFormatted} seconds before</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
