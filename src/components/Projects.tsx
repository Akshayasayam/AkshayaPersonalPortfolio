import { motion } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Commandops — Logistics Platform",
    description:
      "Full-stack logistics platform processing 10,000+ daily transactions covering order tracking, inventory management, and real-time operational reporting.",
    tags: ["Java 8", "Spring Boot", "MySQL", "GCP", "Jenkins", "Microservices", "API Gateway"],
    metrics: ["+20% data retrieval speed", "+15% system throughput", "10K+ daily txns"],
  },
  {
    title: "Recruitment Management Portal",
    description:
      "Role-based recruitment platform enabling Recruiters, Team Leads, and BDMs to manage sourcing, candidate tracking, and client requirements with automated notifications and RBAC.",
    tags: ["Java 8", "Spring Boot", "MySQL", "OpenFeign", "Microservices", "RBAC"],
    metrics: ["Role-based dashboards", "Automated notifications", "Full candidate lifecycle"],
  },
];

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      ref={ref}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-2xl glass p-7 transition-all hover:-translate-y-1 hover:border-cyan/60"
      style={{
        backgroundImage:
          "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(0,212,255,0.12), transparent 40%)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-cyan">Project {i + 1}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            {p.title}
          </h3>
        </div>
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan transition-transform group-hover:rotate-12">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {p.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {p.metrics.map((m) => (
          <span
            key={m}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/20 bg-cyan/5 px-3 py-1.5 text-xs text-cyan"
          >
            <TrendingUp className="h-3 w-3" />
            {m}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-white/5 px-2 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Featured <span className="text-gradient">projects</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
