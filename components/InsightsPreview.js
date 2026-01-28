import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from './ui'

const posts = [
  {slug:'governance-playbook', title:'Governance Playbook: Ship Securely'},
  {slug:'observable-delivery', title:'Observable Delivery Pipelines'},
  {slug:'experiment-platforms', title:'Experimentation Platforms That Scale'}
]

export default function InsightsPreview(){
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold">Insights</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((p)=> (
            <Card key={p.slug} className="card-surface">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-2">A short preview of the insight to invite curiosity and action.</p>
                <div className="mt-4">
                  <Link href={`/marketing/insights/${p.slug}`} className="text-sm text-ovd-green">Read →</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
