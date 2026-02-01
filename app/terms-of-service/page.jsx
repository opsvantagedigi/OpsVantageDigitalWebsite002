import React from "react";
import PageShell from "../../components/PageShell";

export default function TermsPage() {
  return (
    <PageShell
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our services."
    >
      <article>
        <section>
          <h2 className="text-xl font-semibold orbitron-heading">Agreement</h2>
          <p className="mt-2 text-sm text-muted-2">
            These Terms govern your access to and use of OpsVantage Digital
            services. By accessing or using our services you agree to be bound
            by these Terms.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Services</h3>
          <p className="mt-2 text-sm text-muted-2">
            We provide consulting, implementation, and advisory services.
            Specific deliverables and scopes are defined in separate statements
            of work.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">User obligations</h3>
          <p className="mt-2 text-sm text-muted-2">
            You agree to provide accurate information and to comply with
            applicable laws when using our services. Unauthorized use is
            prohibited.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Limitation of Liability</h3>
          <p className="mt-2 text-sm text-muted-2">
            To the maximum extent permitted by law, OpsVantage Digital's
            liability for damages is limited as described in the applicable
            agreement.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Governing law</h3>
          <p className="mt-2 text-sm text-muted-2">
            These Terms are governed by the laws of the jurisdiction specified
            in your contract or, absent a contract, the laws where our company
            is incorporated.
          </p>
        </section>
      </article>
    </PageShell>
  );
}
