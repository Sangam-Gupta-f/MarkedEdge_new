import { ScrollReveal } from '../components/ScrollReveal';

export function CommitmentSection() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(200, 241, 124, 0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[700px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-white text-3xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] mb-8">
            Our Commitment
            <br />
            <span className="text-[#c8f17c]">to Your Growth</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <p className="text-[#a1a1aa] text-lg leading-relaxed">
            We only win when you win. That's why we've built in a hard guarantee — 180 days to a predictable client acquisition setup, or we work for free until we get you there. No fine print. No exceptions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
