import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";

const roles = [
  "Java Backend Developer",
  "Spring Boot Developer",
  "Microservices Architect",
  "GCP Cloud Engineer",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) setTimeout(() => setDel(true), 1400);
      } else {
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((n) => (n + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan/20 to-violet/20 blur-[120px]" />

      <div className="mx-auto max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Akshaya <span className="text-gradient">Sayam</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex min-h-[2.5rem] items-center justify-center text-lg font-medium text-cyan sm:text-xl md:text-2xl"
        >
          <span className="caret">{typed}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Building scalable backend enterprise applications with Java, Spring Boot, Spring
          Microservices & GCP, and relational databases like MySQL and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 glow-cyan"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border glass px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:border-cyan/60"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
            <Mail className="h-3.5 w-3.5 text-cyan" />
            akshayasayam07@gmail.com
          </span>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
            <Phone className="h-3.5 w-3.5 text-cyan" />
            +91-7661874784
          </span>
        </motion.div>
      </div>
    </section>
  );
}
