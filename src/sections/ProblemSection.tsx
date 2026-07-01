import { ScrollReveal } from '../components/ScrollReveal';

export function ProblemSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Left: Text */}
          <div className="md:col-span-3">
            <ScrollReveal>
              <p className="text-[#c8f17c] text-sm font-medium uppercase tracking-[0.08em] mb-4">
                The Real Problem
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-white text-3xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
                Your work is world-class.
                <br />
                Your pipeline isn't.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-[#a1a1aa] text-lg leading-relaxed">
                Most Interior & Architect Design Businesses run on referrals and luck — 1st month 2-3 projects, next month 0. You're spending more time chasing leads than doing the work you love. We fix that. Permanently.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Accent space with subtle glow */}
          <div className="md:col-span-2 flex items-center justify-center">
            <ScrollReveal delay={300}>
              <div className="relative w-full h-[200px] md:h-[280px] flex items-center justify-center">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(200, 241, 124, 0.08) 0%, transparent 70%)',
                  }}
                />
                <div className="relative text-center">
                  <span className="text-[#c8f17c]/20 text-8xl font-bold">?</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
