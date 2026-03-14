import { motion } from "framer-motion";
import plataformaLogo from "@/assets/plataforma-logo.jpg";
import hawkcloudLogo from "@/assets/hawkcloud-logo.png";
import readingLogo from "@/assets/reading-platform-logo.jpg";
import devProjectsLogo from "@/assets/dev-projects-logo.png";

const projects = [
  {
    name: "Plataforma",
    desc: "Plataforma de desenvolvimento de aplicativos mobile onde novos apps são apresentados e promovidos. Funciona como um hub de descoberta de aplicações.",
    logo: plataformaLogo,
    type: "Parceiro",
  },
  {
    name: "HawkCloud",
    desc: "Serviço de hospedagem web e infraestrutura SaaS. Fornece soluções de hospedagem para sites, aplicações e plataformas digitais.",
    logo: hawkcloudLogo,
    type: "Parceiro",
  },
  {
    name: "Projetos de Desenvolvimento",
    desc: "Projetos experimentais e internos desenvolvidos pela INOVIX, incluindo protótipos de software e ferramentas digitais.",
    logo: devProjectsLogo,
    type: "Projeto",
  },
  {
    name: "Refúgio Digital",
    desc: "Plataforma digital de leitura focada em conhecimento e experiências de aprendizado.",
    logo: readingLogo,
    type: "Projeto",
  },
];

const EcosystemSection = () => (
  <section id="ecossistema" className="section-padding navy-bg">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Ecossistema</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary-foreground">
          Nossos Projetos <span className="text-gradient">Conectados</span>
        </h2>
        <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
          Cada projeto opera como um ramo do ecossistema INOVIX, conectado através de infraestrutura e visão compartilhadas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-navy-light/50 border border-primary-foreground/10 rounded-xl p-8 flex items-start gap-5 hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden">
              <img src={p.logo} alt={p.name} className="w-full h-full object-cover rounded-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold text-primary-foreground">{p.name}</h3>
                <span className="text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">{p.type}</span>
              </div>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosystemSection;
