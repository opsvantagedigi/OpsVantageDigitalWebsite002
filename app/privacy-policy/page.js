import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function PrivacyPage(){
  return (
    <PageShell title="Privacy Policy" subtitle="How we collect, use, and protect personal information.">
      <section>
        <h3 className="text-lg font-semibold">Information we collect</h3>
        <p className="mt-2 text-sm">We may collect contact details, usage data, and information you provide when engaging our services.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">How we use data</h3>
        <p className="mt-2 text-sm">Data is used to deliver services, communicate with clients, improve our offerings, and comply with legal obligations.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Third parties</h3>
        <p className="mt-2 text-sm">We may share information with service providers and partners where necessary to operate our services. We require partners to protect data appropriately.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Your rights</h3>
        <p className="mt-2 text-sm">You can request access, correction, or deletion of personal data as permitted by law. Contact us for more details.</p>
      </section>
    </PageShell>
  )
}
