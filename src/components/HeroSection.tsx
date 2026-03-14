import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import NetworkBackground from "./NetworkBackground";
import inovixLogoNavy from "@/assets/inovix-logo-navy.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden navy-bg">
    <NetworkBackground />
    <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-transparent to-navy/80" />

    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <img src={inovixLogoNavy} alt="INOVIX" className="h-20 md:h-28 mx-auto mb-8 object-contain" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-primary-foreground"
      >
        O Núcleo da
        <br />
        <span className="text-gradient">Inovação Digital</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10"
      >
        Construindo plataformas, aplicações e ecossistemas digitais. A INOVIX é o hub central que impulsiona múltiplos projetos de tecnologia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a href="#ecossistema" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity teal-glow">
          Explorar Ecossistema
        </a>
        <a href="#sobre" className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-base hover:bg-primary-foreground/10 transition-colors">
          Saiba Mais
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ArrowDown className="text-primary-foreground/40 animate-bounce" size={24} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
