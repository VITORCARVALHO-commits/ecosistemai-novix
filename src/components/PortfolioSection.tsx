import { motion } from "framer-motion";
import portfolioFinance from "@/assets/portfolio-finance.jpg";
import portfolioReading from "@/assets/portfolio-reading.jpg";
import plataformaLogo from "@/assets/plataforma-logo.jpg";
import hawkcloudLogo from "@/assets/hawkcloud-logo.png";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  { name: "App Financeiro", category: "Fintech · Mobile", image: portfolioFinance, desc: "Aplicativo de controle financeiro com painel de lucros, despesas e estimativas fiscais." },
  { name: "Refúgio Digital", category: "EdTech · Plataforma Web", image: portfolioReading, desc: "Plataforma digital de leitura com biblioteca, coleções e recomendações." },
  { name: "Plataforma", category: "Mobile · Discovery Hub", image: plataformaLogo, desc: "Hub de descoberta de aplicativos mobile desenvolvidos no ecossistema." },
  { name: "HawkCloud", category: "Cloud · Infraestrutura", image: hawkcloudLogo, desc: "Serviço de hospedagem e infraestrutura SaaS para plataformas digitais." },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-secondary/50">
    <div className="max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Portfólio</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary">
          Projetos <span className="text-gradient">Entregues</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Uma seleção de plataformas e produtos construídos dentro do ecossistema INOVIX.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-video bg-secondary flex items-center justify-center overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-lg text-primary">{item.name}</h3>
                <ExternalLink className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
              </div>
              <span className="text-xs text-accent font-medium">{item.category}</span>
              <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
