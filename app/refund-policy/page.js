import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function RefundPolicy(){
  return (
    <PageShell title="Refund Policy" subtitle="Our approach to refunds and service cancellations.">
      <section>
        <h3 className="text-lg font-semibold">Scope</h3>
        <p className="mt-2 text-sm">Refunds are evaluated case-by-case depending on engagement terms, delivered work, and contractual agreements.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Process</h3>
        <p className="mt-2 text-sm">To request a refund, contact your OpsVantage representative with details and supporting materials. We will review and respond promptly.</p>
      </section>
    </PageShell>
  )
}
