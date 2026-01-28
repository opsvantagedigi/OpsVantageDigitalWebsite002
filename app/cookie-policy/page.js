import React from 'react'
import PageShell from '../../components/layout/PageShell'

export default function CookiePolicy(){
  return (
    <PageShell title="Cookie Policy" subtitle="How we use cookies and similar technologies.">
      <section>
        <h3 className="text-lg font-semibold">What are cookies?</h3>
        <p className="mt-2 text-sm">Cookies are small text files stored on your device to help websites remember preferences and measure usage.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Types of cookies</h3>
        <p className="mt-2 text-sm">We use essential cookies for site functionality and analytics cookies to understand usage. We do not use cookies for profiling without consent.</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mt-6">Managing cookies</h3>
        <p className="mt-2 text-sm">You can manage or disable cookies via your browser settings; note that disabling some cookies may affect site functionality.</p>
      </section>
    </PageShell>
  )
}
