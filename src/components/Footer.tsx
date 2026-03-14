import inovixLogoNavy from "@/assets/inovix-logo-navy.png";

const Footer = () => (
  <footer className="navy-bg border-t border-primary-foreground/10 py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={inovixLogoNavy} alt="INOVIX" className="h-8 object-contain" />
        <span className="text-sm text-primary-foreground/50">© 2026 INOVIX. Todos os direitos reservados.</span>
      </div>
      <div className="flex gap-6">
        {[
          { label: "Sobre", href: "#sobre" },
          { label: "Ecossistema", href: "#ecossistema" },
          { label: "Serviços", href: "#servicos" },
          { label: "Contato", href: "#contato" },
        ].map((l) => (
          <a key={l.label} href={l.href} className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
