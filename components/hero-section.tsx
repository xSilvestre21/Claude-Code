const stats = [
  { value: "⭐ 4,9", label: "avaliação dos tutores" },
  { value: "12 anos", label: "cuidando do bairro" },
  { value: "+3.000", label: "pets atendidos" },
];

const heroPets = ["🐶", "🐱", "🐰", "🐹", "🦜", "🐢"];

export function HeroSection() {
  return (
    <section
      className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-start gap-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
          <span aria-hidden>🐾</span>
          Petshop &amp; Clínica Veterinária
        </span>

        <h1
          id="hero-title"
          className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
        >
          Cuidado completo para quem faz parte da família
        </h1>

        <p className="max-w-md text-lg text-foreground/70">
          Banho &amp; tosa, consultas veterinárias, hospedagem e tudo o que o seu
          pet precisa — num só lugar, pertinho de você.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contato"
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-dark"
          >
            Agendar horário
          </a>
          <a
            href="#servicos"
            className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 px-7 text-base font-semibold text-foreground transition-colors hover:border-brand hover:text-brand dark:border-white/15"
          >
            Ver serviços
          </a>
        </div>

        <dl className="mt-4 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dt className="text-xl font-semibold text-foreground">{stat.value}</dt>
              <dd className="text-sm text-foreground/60">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand/20 via-brand/10 to-accent/20">
        <div className="grid h-full grid-cols-2 grid-rows-3 place-items-center gap-4 p-8 text-6xl sm:text-7xl">
          {heroPets.map((pet, index) => (
            <span key={index} aria-hidden>
              {pet}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
