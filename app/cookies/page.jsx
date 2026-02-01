import React from "react";
import PageShell from "../../components/PageShell";

export default function CookiesPage() {
  return (
    <PageShell
      title="Cookies"
      subtitle="How we use cookies and similar technologies."
    >
      <article>
        <section>
          <h2 className="text-xl font-semibold orbitron-heading">
            What are cookies?
          </h2>
          <p className="mt-2 text-sm text-muted-2">
            Cookies are small text files stored on your device to help websites
            remember preferences and measure usage.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Types of cookies</h3>
          <p className="mt-2 text-sm text-muted-2">
            We use essential cookies for site functionality and analytics
            cookies to understand usage. We do not use cookies for profiling
            without consent.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Managing cookies</h3>
          <p className="mt-2 text-sm text-muted-2">
            You can manage or disable cookies via your browser settings; note
            that disabling some cookies may affect site functionality.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
