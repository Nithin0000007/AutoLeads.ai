import { useState, useEffect } from 'react';
import Home from './pages/home/Home';
import BookingModal from './components/BookingModal';
import ExitIntentPopup from './components/ExitIntentPopup';
export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitShown, setExitShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown && !showModal) {
        setExitShown(true);
        setTimeout(() => setShowExitPopup(true), 500);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitShown, showModal]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Home onBookDemo={openModal} />

      {showModal && <BookingModal onClose={closeModal} />}

      {showExitPopup && (
        <ExitIntentPopup
          onClose={() => setShowExitPopup(false)}
          onBookDemo={openModal}
        />
      )}
    </>
  );
}