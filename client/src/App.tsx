import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoBar from './components/LogoBar';
import Testimonials from './components/Testimonials';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import WhatYouGet from './components/WhatYouGet';
import CaseStudies from './components/CaseStudies';
import Comparison from './components/Comparison';
import BookCall from './components/BookCall';
import FAQ from './components/FAQ';
import TrustSection from './components/TrustSection';
import BookingSection from './components/BookingSection';
import FinalCTA from './components/FinalCTA';
// import FloatingElements from './components/FloatingElements';
import ExitIntentPopup from './components/ExitIntentPopup';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

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
    <div className="bg-[#050d1a] min-h-screen">
      <Navbar onBookDemo={openModal} />
      <Hero onBookDemo={openModal} />
      <LogoBar />
      <Testimonials />
      <ProblemSolution />
      <HowItWorks />
      <WhatYouGet />
      <CaseStudies />
      <Comparison />
      <BookCall onBookDemo={openModal} />
      <FAQ />
      <TrustSection />
      <BookingSection />
      <FinalCTA onBookDemo={openModal} />
      <Footer />
      {/* <FloatingElements onBookDemo={openModal} /> */}
      {showModal && <BookingModal onClose={closeModal} />}
      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} onBookDemo={openModal} />}
    </div>
  );
}
