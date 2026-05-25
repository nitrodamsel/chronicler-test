import type { ReactNode } from "react";

type PageLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <main className="relative overflow-hidden bg-state-default px-6 py-12 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,theme(colors.primary/12%),transparent_35%),radial-gradient(circle_at_80%_0%,theme(colors.secondary/12%),transparent_40%),radial-gradient(circle_at_50%_80%,theme(colors.state-ghost),transparent_35%)]" />
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-state-ghost bg-white/90 p-6 shadow-xl shadow-primary/10 backdrop-blur sm:p-10">
        <header className="mb-8">
          {/* <p className="mb-2 inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            React + TypeScript
          </p> */}
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">{subtitle}</p>
        </header>

        {children}
      </div>
    </main>
  );
}

export default PageLayout;
