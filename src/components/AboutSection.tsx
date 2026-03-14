import { motion } from "framer-motion";
import { Cpu, Layers, Globe } from "lucide-react";

const features = [
  { icon: Cpu, title: "Motor de Inovação", desc: "Criando software e ferramentas digitais de ponta." },
  { icon: Layers, title: "Ecossistemas Escaláveis", desc: "Construindo plataformas interconectadas que crescem juntas." },
  { icon: Globe, title: "Visão Global", desc: "Expandindo produtos digitais sob uma visão unificada." },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Sobre Nós</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary">
          Impulsionando a <span className="text-gradient">Transformação Digital</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A INOVIX é um hub de inovação tecnológica responsável por criar, apoiar e gerenciar plataformas digitais, aplicações, infraestrutura de hospedagem e projetos experimentais. Nossa missão é construir ecossistemas digitais escaláveis onde múltiplos produtos possam crescer sob uma única visão tecnológica.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-card p-8 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <f.icon className="text-accent" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3 text-primary">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
