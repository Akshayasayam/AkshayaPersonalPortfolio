import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ChevronDown } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    role: "Java Backend Developer",
    period: "05/2024 – Present",
    company: "FRONTdoor Collective (via Dataquad Inc)",
    location: "Hyderabad, India",
    project: "Commandops · Logistics",
    stack: ["Java 8", "Spring Boot", "MySQL", "GCP", "Jenkins", "Playwright"],
    points: [
      "Developed reusable backend modules and service components in Java + Spring Boot, improving consistency and maintainability.",
      "Engineered high-throughput REST APIs — increased data retrieval speed by 20% and system throughput by 15%.",
      "Optimized MySQL schemas and complex queries; authored stored procedures automating data workflows.",
      "Implemented Microservices with API Gateway integration, enabling independent service deployment.",
      "Supported GCP deployments and Jenkins CI/CD pipeline execution; monitored logs for faster incident resolution.",
      "Standardized persistence using Spring Data JPA & Hibernate, reducing boilerplate by ~30%.",
      "Delivered a logistics platform processing 10,000+ daily transactions across order tracking & inventory.",
      "Collaborated in an 8-member Agile/Scrum team through sprint planning, grooming, and stand-ups.",
    ],
  },
  {
    role: "Java Developer",
    period: "06/2023 – 04/2024",
    company: "Dataquad Inc",
    location: "Hyderabad, India",
    project: "Recruitment Portal · Recruitment Management",
    stack: ["Java 8", "Spring Boot", "MySQL", "Microservices", "OpenFeign"],
    points: [
      "Built Spring Boot microservices for task logging, candidate tracking, and client requirement management.",
      "Implemented OpenFeign for inter-service communication with low-latency data exchange.",
      "Built role-based dashboards for Recruiters, Team Leads, and BDMs improving accountability.",
      "Refined DB queries and pagination, improving API performance and microservices design.",
      "Designed RESTful APIs for full candidate lifecycle: sourcing → screening → interview → offer.",
      "Implemented authentication and role-based access control (RBAC) for secure access.",
      "Integrated email notifications for candidate and stakeholder status updates.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Career
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Click a role to reveal the project details.
          </p>
        </motion.div>

        <div className="relative mt-14 pl-8 sm:pl-12">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:left-4"
          />

          <div className="space-y-6">
            {jobs.map((j, i) => (
              <TimelineItem key={j.role + j.period} j={j} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ j, i }: { j: (typeof jobs)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="relative"
    >
      <div className="absolute -left-[26px] top-5 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet ring-4 ring-background sm:-left-[34px]">
        <Briefcase className="h-3.5 w-3.5 text-primary-foreground" />
      </div>

      <div className="glass overflow-hidden rounded-2xl transition-all hover:border-cyan/40">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center gap-4 p-6 text-left"
        >
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold">{j.role}</h3>
              <span className="text-xs text-cyan">{j.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {j.company} — {j.location}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-violet">
              {j.project}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-cyan"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-border px-6 pb-6 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {j.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-white/5 px-2 py-1 text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2">
                  {j.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
