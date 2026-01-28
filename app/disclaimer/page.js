import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function Disclaimer(){
  return (
    <PageShell title="Disclaimer" subtitle="Important information about the content and services provided.">
      <section>
        <h3 className="text-lg font-semibold">No professional advice</h3>
        <p className="mt-2 text-sm">Content on this site is for general informational purposes and is not a substitute for professional advice tailored to your circumstances.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Accuracy of information</h3>
        <p className="mt-2 text-sm">We strive for accuracy but do not guarantee completeness or suitability. Use information at your own risk.</p>
      </section>
    </PageShell>
  )
}
