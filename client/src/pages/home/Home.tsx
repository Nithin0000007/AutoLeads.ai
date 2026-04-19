import BookCall from "../../components/BookCall";
import FinalCTA from "../../components/FinalCTA";
import FloatingElements from "../../components/FloatingElements";
import Footer from "../../components/Footer";
import LogoBar from "../../components/LogoBar";
import Navbar from "../../components/Navbar";
import BookingSection from "./components/BookingSection";
import CaseStudies from "./components/CaseStudies";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProblemSolution from "./components/ProblemSolution";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";
import WhatYouGet from "./components/WhatYouGet";


interface Props {
  onBookDemo: () => void;
}

export default function Home({ onBookDemo }: Props) {
  return (
    <div className="bg-[#050d1a] min-h-screen">
      <Navbar onBookDemo={onBookDemo} />

      <Hero onBookDemo={onBookDemo} />
      <LogoBar />
      <Testimonials />
      <ProblemSolution />
      <HowItWorks />
      <WhatYouGet />
      <CaseStudies />
      <Comparison />
      <BookCall onBookDemo={onBookDemo} />
      <FAQ />
      <TrustSection />
      <BookingSection />

      <FinalCTA onBookDemo={onBookDemo} />
      <Footer />

      <FloatingElements onBookDemo={onBookDemo} />
    </div>
  );
}