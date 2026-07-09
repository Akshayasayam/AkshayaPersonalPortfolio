import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `From: ${form.name} <${form.email}>%0D%0A%0D%0A${encodeURIComponent(
      form.message,
    )}`;
    window.location.href = `mailto:akshayasayam07@gmail.com?subject=Portfolio contact from ${encodeURIComponent(
      form.name,
    )}&body=${body}`;
  };

  return (
    <section id="contact" className="relative flex min-h-screen flex-col justify-between px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Let's <span className="text-gradient">connect</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a role, project, or an interesting problem in Java / Spring Boot / GCP?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-2"
          >
            <ContactRow
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="akshayasayam07@gmail.com"
              href="mailto:akshayasayam07@gmail.com"
            />
            <ContactRow
              icon={<Phone className="h-4 w-4" />}
              label="Phone"
              value="+91-7661874784"
              href="tel:+917661874784"
            />
            <ContactRow
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/sayamakshaya"
              href="https://linkedin.com/in/sayamakshaya"
            />
            <ContactRow
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="github.com/Akshayasayam"
              href="https://github.com/Akshayasayam"
            />
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass space-y-4 rounded-2xl p-6 lg:col-span-3"
          >
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
            />
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-cyan/60 focus:ring-2 focus:ring-cyan/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] glow-cyan sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <footer className="mx-auto mt-20 flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Akshaya Sayam. Crafted with Java-grade care.</p>
        <div className="flex gap-2">
          <FooterIcon href="https://github.com/Akshayasayam" label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href="https://linkedin.com/in/sayamakshaya" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href="mailto:akshayasayam07@gmail.com" label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>
        </div>
      </footer>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-xl glass p-4 transition-all hover:-translate-y-0.5 hover:border-cyan/60"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="block truncate text-sm text-foreground group-hover:text-cyan">
          {value}
        </span>
      </span>
    </a>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-all focus:border-cyan/60 focus:ring-2 focus:ring-cyan/20"
      />
    </div>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-all hover:border-cyan/60 hover:text-cyan"
    >
      {children}
    </a>
  );
}
