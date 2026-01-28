import React from 'react'

const items = [
  {title: 'Revenue Acceleration', body: 'From funnel instrumentation to scaled acquisition channels — shipped as a repeatable system.'},
  {title: 'Retention & Growth', body: 'LTV optimization and onboarding flows that lift activation and reduce churn.'},
  {title: 'Delivery Ops', body: 'Reliable delivery pipelines, observability, and playbooks for repeatability.'},
  {title: 'Data & Analytics', body: 'Actionable dashboards and experimentation infrastructure for growth teams.'}
]

export default function BentoGrid(){
  return (
    <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap:'1.25rem', marginTop:'1.5rem'}}>
      {items.map((it, i) => (
        <article key={i} className="features__card" style={{padding:'1.5rem'}}>
          <div className="features__icon">🔹</div>
          <h3 className="features__title">{it.title}</h3>
          <p className="features__description">{it.body}</p>
        </article>
      ))}
    </div>
  )
}
