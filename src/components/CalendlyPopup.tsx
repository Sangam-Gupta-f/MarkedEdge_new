import { PopupModal } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyPopup({ title }: { title: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function isCalendlyEvent(e: MessageEvent) {
      return e.origin === "https://calendly.com";
    }

    function handleMessage(e: MessageEvent) {
      if (!isCalendlyEvent(e)) return;

      if (e.data.event === "calendly.event_scheduled") {
        window.location.href = "/thank-you";
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 bg-[#c8f17c] text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[#d4f7a0]"
      >
        {title || "Book a Free Strategy Call"}
      </button>

      <PopupModal
        url="https://calendly.com/rituraj-markededge/30min"
        open={isOpen}
        onModalClose={() => setIsOpen(false)}
        rootElement={document.getElementById("root") || document.body}
      />
    </>
  );
}
