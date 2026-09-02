import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="fixed bottom-6 right-6 w-10 h-10 rounded-full border border-[#1d5a96] bg-transparent text-slate-400 hover:border-[#00BFFF] hover:text-[#00BFFF] hover:shadow-[0_0_16px_rgba(0,191,255,0.25)] flex items-center justify-center transition-all duration-200 backdrop-blur-sm z-50"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
