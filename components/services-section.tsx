type Service = {
  emoji: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    emoji: "🛁",
    title: "Banho & Tosa",
    description:
      "Produtos hipoalergênicos, secagem sem gaiola e tosa higiênica ou na tesoura.",
  },
  {
    emoji: "🩺",
    title: "Consulta Veterinária",
    description:
      "Clínica geral, vacinação e exames com veterinários de plantão todos os dias.",
  },
  {
    emoji: "🏨",
    title: "Hospedagem",
    description:
      "Diárias com passeios, alimentação supervisionada e atualizações por foto.",
  },
  {
    emoji: "🦴",
    title: "Pet Shop",
    description:
      "Rações, petiscos, brinquedos e acessórios das marcas que o seu pet gosta.",
  },
  {
    emoji: "🎾",
    title: "Adestramento",
    description:
      "Aulas de obediência básica e socialização com reforço positivo.",
  },
  {
    emoji: "🚐",
    title: "Táxi Dog",
    description:
      "Buscamos e levamos o seu pet em segurança, dentro da nossa área de atendimento.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-20 bg-black/[.02] py-16 dark:bg-white/[.02] lg:py-24"
      aria-labelledby="servicos-title"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="flex max-w-2xl flex-col gap-3">
          <h2
            id="servicos-title"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Tudo o que o seu pet precisa
          </h2>
          <p className="text-lg text-foreground/70">
            Serviços pensados para o bem-estar do seu melhor amigo, com equipe
            treinada e ambiente tranquilo.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-background p-6 transition-shadow hover:shadow-lg dark:border-white/10"
            >
              <span aria-hidden className="text-4xl">
                {service.emoji}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
