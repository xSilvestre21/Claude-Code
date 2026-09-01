const contactInfo = [
  { emoji: "📞", label: "Telefone", value: "(11) 4000-0000" },
  { emoji: "📍", label: "Endereço", value: "Rua dos Bichos, 123 — São Paulo/SP" },
  { emoji: "🕘", label: "Horário", value: "Seg a Sáb, 8h às 19h" },
];

export function CtaSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 py-16 lg:py-24"
      aria-labelledby="contato-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-brand p-8 text-brand-foreground sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4">
            <h2
              id="contato-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Agende a visita do seu pet
            </h2>
            <ul className="flex flex-col gap-2 text-brand-foreground/90">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-center gap-3">
                  <span aria-hidden className="text-xl">
                    {info.emoji}
                  </span>
                  <span>
                    <span className="sr-only">{info.label}: </span>
                    {info.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-foreground/70">
              Dados fictícios — projeto de demonstração.
            </p>
          </div>

          <a
            href="https://wa.me/5511400000000"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-foreground px-7 text-base font-semibold text-brand transition-opacity hover:opacity-90"
          >
            <span aria-hidden>💬</span>
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
