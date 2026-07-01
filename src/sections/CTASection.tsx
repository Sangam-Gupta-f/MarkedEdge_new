import { ScrollReveal } from "../components/ScrollReveal";
import CalendlyPopup from "@/components/CalendlyPopup";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 border-t border-[#1a1a1a]">
      {/* Subtle accent glow behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200, 241, 124, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[600px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-white text-3xl md:text-[40px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">
            Ready to Find Out
            <br />
            What's Possible?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="text-[#a1a1aa] text-lg leading-relaxed mb-10">
            One 30-minute call. We'll walk you through exactly how this works
            and whether it's the right fit for your business.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <CalendlyPopup title="Book Your Free Call Now" />
          {/* <a
            href="https://calendly.com/rituraj-markededge/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#c8f17c] text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-[#d4f7a0] hover:scale-[1.02] active:scale-[0.98] mb-4"
          >
            Book Your Free Call Now
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </a> */}
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="text-[#71717a] text-sm">
            Limited spots available each week.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
