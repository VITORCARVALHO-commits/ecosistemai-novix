import { motion } from "framer-motion";
import { Mail, MessageCircle, Building } from "lucide-react";

const ContactSection = () => (
  <section id="contato" className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
        <span className="text-accent text-sm font-medium uppercase tracking-widest">Contato</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-primary">
          Vamos <span className="text-gradient">Conversar</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Pronto para construir algo incrível? Entre em contato com nossa equipe.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { icon: Mail, label: "Email", value: "contato@inovix.tech", href: "mailto:contato@inovix.tech" },
          { icon: Building, label: "Comercial", value: "parcerias@inovix.tech", href: "mailto:parcerias@inovix.tech" },
          { icon: MessageCircle, label: "WhatsApp", value: "Enviar Mensagem", href: "https://wa.me/5500000000000" },
        ].map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:shadow-md transition-all duration-300 group"
          >
            <c.icon className="text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-display font-semibold mb-1 text-primary">{c.label}</h3>
            <p className="text-muted-foreground text-sm">{c.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
