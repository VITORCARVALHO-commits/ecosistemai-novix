import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const VisionSection = () => (
  <section id="visao" className="section-padding navy-bg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
    <div className="max-w-4xl mx-auto relative z-10 text-center">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Rocket className="text-accent mx-auto mb-6" size={40} />
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
          Construindo o Futuro das
          <br />
          <span className="text-gradient">Plataformas Digitais</span>
        </h2>
        <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A INOVIX visa se tornar um ecossistema global de inovação onde múltiplos produtos digitais e empresas de tecnologia operam juntos através de infraestrutura e visão compartilhadas. Acreditamos que o futuro é interconectado — e estamos construindo isso.
        </p>
        <a href="#contato" className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity teal-glow">
          Faça Parte da Nossa Jornada
        </a>
      </motion.div>
    </div>
  </section>
);

export default VisionSection;
