import { Header } from './components/Header';
import { GlowOrbs } from './components/GlowOrbs';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { PillarsSection } from './sections/PillarsSection';
import { CommitmentSection } from './sections/CommitmentSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Ambient background glow */}
      <GlowOrbs />

      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <PillarsSection />
        <CommitmentSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
