import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Daily Transactions" },
  { value: 95, suffix: "%+", label: "QA Test Pass Rate" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (v) =>
    Math.floor(v).toLocaleString(),
  );

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient sm:text-5xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            About Me
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Backend engineering, <span className="text-gradient">at scale</span>.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Java Backend Developer with <span className="text-foreground">3+ years</span>{" "}
              of experience designing, developing, and deploying scalable, cloud-native
              enterprise applications across the full backend lifecycle. Proficient in{" "}
              <span className="text-foreground">Java 8, Spring Boot, Spring MVC</span>, and{" "}
              <span className="text-foreground">Microservices architecture</span>, with a
              strong track record of building high-performance RESTful APIs and distributed
              systems.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Experienced in ORM-based persistence using Spring Data JPA and Hibernate, and
              database design and optimization using MySQL and PostgreSQL. Demonstrated
              ability to improve system performance — including a{" "}
              <span className="text-cyan">20% increase in data retrieval speed</span> and{" "}
              <span className="text-cyan">30% reduction in code duplication</span>.
              Experienced in GCP deployments using Jenkins CI/CD pipelines and a certified
              Google Cloud Associate Cloud Engineer.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass rounded-2xl p-5 transition-all hover:scale-[1.03] hover:border-cyan/40"
              >
                <Counter to={s.value} suffix={s.suffix} />
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
