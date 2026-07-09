import { motion } from "motion/react";
import { Award, GraduationCap } from "lucide-react";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative flex min-h-screen items-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Credentials
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Certifications & <span className="text-gradient">education</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-cyan/60"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan to-violet">
              <Award className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold">
              Google Cloud Associate Cloud Engineer
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Google Cloud Career Readiness Program · Certified by Google
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              GCP core services, cloud infrastructure, IAM, and deployment management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-7 transition-all hover:-translate-y-1 hover:border-cyan/60"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet to-cyan">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold">
              B.Tech — Computer Science & Engineering
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              CMR Technical Campus · Hyderabad, India
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Focused on software engineering, data structures, algorithms, and database
              systems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
