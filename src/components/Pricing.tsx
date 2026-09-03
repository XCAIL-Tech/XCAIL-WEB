import { useState } from "react";
import { Check } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { calTriggerProps } from "@/lib/cal";

interface PricingCardProps {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  href?: string;
  external?: boolean;
  /** Si es true, el CTA abre el modal de Cal.com en vez de navegar. */
  calModal?: boolean;
  accent: string;
  highlight?: boolean;
}

function PricingCard({
  badge, title, subtitle, price, priceNote,
  features, cta, href, external, calModal, accent, highlight,
}: PricingCardProps) {
  const [cardHovered, setCardHovered] = useState(false);

  // Ignorar hover en dispositivos táctiles — evita el "salto" de la card
  // cuando el dedo pasa por encima al hacer scroll rápido.
  const supportsHover = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

  // Efecto de brillo de neón para la tarjeta
  const cardStyle = highlight
    ? { borderColor: "#5F33FF", boxShadow: "0 0 30px rgba(95, 51, 255, 0.28)", transform: cardHovered ? "translateY(-4px)" : "none" }
    : cardHovered
      ? { borderColor: `${accent}80`, boxShadow: `0 0 25px ${accent}20`, transform: "translateY(-2px)" }
      : { borderColor: "#1d5a96" };

  return (
    <div
      onMouseEnter={() => supportsHover() && setCardHovered(true)}
      onMouseLeave={() => supportsHover() && setCardHovered(false)}
      className={`relative flex flex-col gap-6 rounded-2xl border p-6 lg:p-8 backdrop-blur-md transition-all duration-300 ease-out ${
        highlight ? "bg-card/85 lg:-translate-y-3 z-10" : "bg-card/60"
      }`}
      style={cardStyle}
    >
      {/* Popular/Active Badge */}
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5F33FF] to-[#00BFFF] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_0_10px_#5F33FF]">
          Most Popular
        </span>
      )}

      {/* Plan Badge */}
      <span
        className="inline-flex self-start items-center text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border"
        style={{ backgroundColor: `${accent}12`, borderColor: `${accent}35`, color: accent }}
      >
        {badge}
      </span>

      {/* Título de Plan */}
      <div>
        <h3 className="text-xl font-extrabold text-white mb-1.5">{title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">{subtitle}</p>
      </div>

      {/* Precio Grande */}
      <div className="py-4 border-y border-[#164272]/40">
        <p className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
          {price.includes("$") ? (
            <>
              <span className="text-2xl font-bold">$</span>
              {price.replace("$", "")}
            </>
          ) : (
            price
          )}
          {price === "Gratis" || price === "Free" ? "" : ""}
        </p>
        <p className="text-[11px] text-slate-400 font-semibold tracking-wide mt-1.5">{priceNote}</p>
      </div>

      {/* Features List */}
      <ul className="space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-xs text-slate-300 leading-snug">
            <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accent }} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {(() => {
        const ctaClassName = highlight
          ? "w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 btn-primary-gradient block mt-auto cursor-pointer"
          : "w-full text-center py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-slate-700 hover:border-white text-white hover:bg-white hover:text-black block mt-auto cursor-pointer";
        const ctaStyle = highlight
          ? undefined
          : {
              borderColor: `${accent}60`,
              color: cardHovered ? "#fff" : accent,
              backgroundColor: cardHovered ? `${accent}10` : "transparent",
            };

        return calModal ? (
          <button type="button" {...calTriggerProps} className={ctaClassName} style={ctaStyle}>
            {cta}
          </button>
        ) : (
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={ctaClassName}
            style={ctaStyle}
          >
            {cta}
          </a>
        );
      })()}
    </div>
  );
}

export function Pricing() {
  const { tr } = useI18n();
  const p = tr.pricing;

  // El orden se establece como: Familiar (Cyan), Institutional (Violet - Highlighted en el centro), INCLUXIA Connect (Cyan)
  const cards = [
    { key: "familiar",      data: p.familiar,      accent: "#00BFFF", highlight: false, href: "https://asistea.app", external: true },
    { key: "institutional", data: p.institutional, accent: "#5F33FF", highlight: true,  calModal: true },
    { key: "ohm",           data: p.ohm,           accent: "#00BFFF", highlight: false, href: "https://incluxia.app/connect/planes", external: true },
  ] as const;

  return (
    <section id="pricing" className="bg-background relative py-20 sm:py-24">
      {/* Glows de fondo */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60%] h-[40%] bg-[#5f33ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 text-transparent bg-clip-text">
              {p.title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{p.subtitle}</p>
        </div>

        {/* Cuadrícula de Tarjetas de Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-12">
          {cards.map((card) => (
            <PricingCard
              key={card.key}
              badge={card.data.badge}
              title={card.data.title}
              subtitle={card.data.subtitle}
              price={card.data.price}
              priceNote={card.data.price_note}
              features={card.data.features}
              cta={card.data.cta}
              accent={card.accent}
              highlight={card.highlight}
              href={"href" in card ? card.href : undefined}
              external={"external" in card ? card.external : undefined}
              calModal={"calModal" in card ? card.calModal : undefined}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
