import { useRef, forwardRef, useImperativeHandle } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {remainingTime > 0 ? 'won' : 'lost'}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer{' '}
        <strong>{remainingTime / 60} seconds before</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
