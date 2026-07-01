import CalendlyPopup from "@/components/CalendlyPopup";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[72px] px-6 md:px-12">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Label */}
        <p className="text-[#c8f17c] text-sm font-medium uppercase tracking-[0.08em] mb-6 opacity-0 animate-fade-in-up">
          For Interior Designers & Architects
        </p>

        {/* H1 */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-6 opacity-0 animate-fade-in-up animation-delay-100">
          Stop Chasing Clients.
          <br />
          Build a System That Brings
          <br />
          Them to You.
        </h1>

        {/* Subtext */}
        <p className="text-[#a1a1aa] text-lg leading-relaxed max-w-[640px] mx-auto mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          A proven client acquisition setup — built specifically for Interior &
          Architect Design Businesses — that creates a predictable pipeline of
          high-value inquiries. Every single month.
        </p>

        {/* Guarantee Badge */}
        <div className="inline-flex items-center gap-2 border border-[#c8f17c]/30 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up animation-delay-300">
          <span className="text-[#c8f17c] text-sm font-medium">
            180-Day Guarantee: Results or we work for free until you get there.
          </span>
        </div>

        {/* CTA Button */}
        <div className="mb-3 opacity-0 animate-fade-in-up animation-delay-400">
          <CalendlyPopup title="Book Your Free Call Now" />
          {/* <a
            href="https://calendly.com/rituraj-markededge/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#c8f17c] text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[#d4f7a0] hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a> */}
        </div>

        {/* CTA Sub */}
        <p className="text-[#71717a] text-sm mb-12 opacity-0 animate-fade-in-up animation-delay-500">
          30 minutes. No pitch. Just clarity on what's possible for your
          business.
        </p>

        {/* Stats Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 opacity-0 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-2xl px-6 py-4 min-w-[200px]">
            <span className="text-[#c8f17c] text-5xl font-bold tracking-[-0.02em]">
              180
            </span>
            <span className="text-[#a1a1aa] text-sm text-left leading-tight">
              Day guaranteed
              <br />
              timeline
            </span>
          </div>
          <div className="flex items-center gap-4 bg-[#111111] border border-[#1a1a1a] rounded-2xl px-6 py-4 min-w-[200px]">
            <span className="text-[#c8f17c] text-5xl font-bold tracking-[-0.02em]">
              ₹0
            </span>
            <span className="text-[#a1a1aa] text-sm text-left leading-tight">
              If we don't deliver
              <br />
              results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
