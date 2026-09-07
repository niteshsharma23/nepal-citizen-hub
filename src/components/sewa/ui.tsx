import type { ReactNode } from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
      <h2 className="section-rule text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ExtLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "saffron";
  className?: string;
}) {
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : variant === "saffron"
        ? "bg-saffron text-saffron-foreground hover:brightness-105"
        : "border border-border bg-surface text-foreground hover:bg-accent";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function InfoCard({
  icon,
  title,
  desc,
  href,
  cta,
}: {
  icon: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <article className="card-base flex h-full flex-col p-5">
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-xl"
        >
          {icon}
        </span>
        <h3 className="mt-1 text-base font-bold leading-snug">{title}</h3>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <ExtLink href={href} className="mt-4 w-full">
        {cta}
      </ExtLink>
    </article>
  );
}

export function Notice({ children, tone = "info" }: { children: ReactNode; tone?: "info" | "warn" }) {
  return (
    <p
      className={`rounded-lg border-l-4 px-4 py-3 text-sm leading-relaxed ${
        tone === "warn"
          ? "border-l-saffron bg-saffron/12 text-foreground"
          : "border-l-skyblue bg-accent/60 text-foreground"
      }`}
    >
      {children}
    </p>
  );
}
