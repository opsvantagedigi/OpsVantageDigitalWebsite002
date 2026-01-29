import React from 'react'
import PageShell from '../../components/PageShell'

export default function TermsPage(){
  return (
    <PageShell title="Terms of Service" subtitle="Please read these terms carefully before using our services.">
      <section>
        <h2 className="text-xl font-semibold">Agreement</h2>
        <p className="mt-2 text-sm">These Terms govern your access to and use of OpsVantage Digital services. By accessing or using our services you agree to be bound by these Terms.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Services</h3>
        <p className="mt-2 text-sm">We provide consulting, implementation, and advisory services. Specific deliverables and scopes are defined in separate statements of work.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">User obligations</h3>
        <p className="mt-2 text-sm">You agree to provide accurate information and to comply with applicable laws when using our services. Unauthorized use is prohibited.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Limitation of Liability</h3>
        <p className="mt-2 text-sm">To the maximum extent permitted by law, OpsVantage Digital's liability for damages is limited as described in the applicable agreement.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Governing law</h3>
        <p className="mt-2 text-sm">These Terms are governed by the laws of the jurisdiction specified in your contract or, absent a contract, the laws where our company is incorporated.</p>
      </section>
    </PageShell>
  )
}
