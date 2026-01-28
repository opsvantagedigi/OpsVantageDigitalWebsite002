import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function Disclaimer(){
  return (
    <PageShell title="Disclaimer" subtitle="Important information about the content and services provided.">
      <article>
        <section>
          <h2 className="text-xl font-semibold orbitron-heading">No professional advice</h2>
          <p className="mt-2 text-sm text-muted-2">Content on this site is for general informational purposes and is not a substitute for professional advice tailored to your circumstances.</p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold">Accuracy of information</h3>
          <p className="mt-2 text-sm text-muted-2">We strive for accuracy but do not guarantee completeness or suitability. Use information at your own risk.</p>
        </section>
      </article>
    </PageShell>
  )
}
