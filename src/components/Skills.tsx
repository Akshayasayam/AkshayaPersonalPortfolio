import { motion } from "motion/react";

const groups: { title: string; items: { name: string; level: number }[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Java 8 / Core Java", level: 92 },
      { name: "Java EE", level: 80 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", level: 92 },
      { name: "Spring MVC", level: 85 },
      { name: "Spring Data JPA / Hibernate", level: 82 },
      { name: "Microservices / API Gateway", level: 85 },
      { name: "OpenFeign", level: 78 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", level: 88 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Oracle / SQL Server", level: 70 },
      { name: "Stored Procedures / JDBC", level: 80 },
    ],
  },
  {
    title: "Cloud / DevOps",
    items: [
      { name: "Google Cloud Platform", level: 82 },
      { name: "Jenkins / CI-CD", level: 78 },
      { name: "Maven", level: 85 },
      { name: "Git / Bitbucket", level: 88 },
    ],
  },
  {
    title: "Testing",
    items: [
      { name: "Manual QA (Func / Int / Regression)", level: 90 },
      { name: "Postman / Swagger", level: 88 },
      { name: "Playwright", level: 65 },
    ],
  },
  {
    title: "Tools & Methodology",
    items: [
      { name: "IntelliJ IDEA / Eclipse", level: 90 },
      { name: "JIRA / GitHub", level: 88 },
      { name: "Apache Tomcat", level: 78 },
      { name: "Agile / Scrum / SDLC", level: 90 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative flex min-h-screen items-center px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Toolbox
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Skills & <span className="text-gradient">proficiency</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="mb-5 font-display text-lg font-semibold">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map((s, i) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex justify-between text-xs">
                      <span className="text-muted-foreground">{s.name}</span>
                      <span className="text-cyan">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
