import { useEffect, useState } from "react";
import CalendlyPopup from "./CalendlyPopup";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none">
          <span className="text-[#c8f17c] font-bold text-xl tracking-tight">
            ME.
          </span>
          <span className="text-[#71717a] text-[8px] tracking-[0.15em] uppercase font-medium">
            MARKED<span className="text-[#c8f17c]">EDGE</span>
          </span>
        </a>

        {/* CTA */}
        <CalendlyPopup title="Chat Now" />
        {/* <a
          href="https://calendly.com/rituraj-markededge/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#c8f17c] text-[#0a0a0a] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-[#d4f7a0] hover:scale-[1.02] active:scale-[0.98]"
        >
          Chat Now
        </a> */}
      </div>
    </header>
  );
}
