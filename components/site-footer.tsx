const footerLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
  { href: "#", label: "Início" },
];

const socials = [
  { href: "#", label: "Instagram", emoji: "📸" },
  { href: "#", label: "Facebook", emoji: "👍" },
  { href: "#", label: "WhatsApp", emoji: "💬" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-black/[.02] dark:border-white/10 dark:bg-white/[.02]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-semibold text-foreground">
            <span aria-hidden className="text-xl">
              🐾
            </span>
            Patas Felizes
          </span>
          <p className="text-sm text-foreground/60">
            Petshop &amp; Clínica Veterinária — cuidando de quem você ama.
          </p>
        </div>

        <nav className="flex gap-6" aria-label="Links do rodapé">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/70 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ul className="flex gap-4">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg transition-colors hover:border-brand dark:border-white/15"
              >
                <span aria-hidden>{social.emoji}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-black/5 py-6 text-center text-sm text-foreground/50 dark:border-white/10">
        © {year} Patas Felizes. Projeto de demonstração.
      </div>
    </footer>
  );
}
