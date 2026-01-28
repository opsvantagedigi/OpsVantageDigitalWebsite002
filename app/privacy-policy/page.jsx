import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function PrivacyPage(){
  return (
    <PageShell title="Privacy Policy" subtitle="How we collect, use, and protect personal information.">
      <article>
        <section>
          <h2 className="text-xl font-semibold orbitron-heading">Information we collect</h2>
          <p className="mt-2 text-sm text-muted-2">We may collect contact details, usage data, and information you provide when engaging our services.</p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">How we use data</h3>
          <p className="mt-2 text-sm text-muted-2">Data is used to deliver services, communicate with clients, improve our offerings, and comply with legal obligations.</p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Third parties</h3>
          <p className="mt-2 text-sm text-muted-2">We may share information with service providers and partners where necessary to operate our services. We require partners to protect data appropriately.</p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Your rights</h3>
          <p className="mt-2 text-sm text-muted-2">You can request access, correction, or deletion of personal data as permitted by law. Contact us for more details.</p>
        </section>
      </article>
    </PageShell>
  )
}
