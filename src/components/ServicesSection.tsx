import { motion } from "framer-motion";
import { Smartphone, Globe, Cloud, Server, Lightbulb, Package } from "lucide-react";

const services = [
  { icon: Smartphone, title: "Desenvolvimento de Apps", desc: "Aplicações mobile nativas e multiplataforma." },
  { icon: Globe, title: "Desenvolvimento Web", desc: "Aplicações e sites web modernos e responsivos." },
  { icon: Package, title: "Plataformas SaaS", desc: "Soluções software-as-a-service escaláveis." },
  { icon: Cloud, title: "Hospedagem Cloud", desc: "Infraestrutura de hospedagem confiável para qualquer escala." },
  { icon: Lightbulb, title: "Consultoria Tech", desc: "Orientação e planejamento tecnológico estratégico." },
  { icon: Server, title: "Produtos Digitais", desc: "Desenvolvimento de produtos digitais de ponta a ponta." },
];

const ServicesSection = () => (
  <section id="servicos" className="section-padding bg-background">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Serviços</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary">
          O Que <span className="text-gradient">Construímos</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-7 hover:shadow-md transition-all duration-300 group cursor-default"
          >
            <s.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-display text-lg font-semibold mb-2 text-primary">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
