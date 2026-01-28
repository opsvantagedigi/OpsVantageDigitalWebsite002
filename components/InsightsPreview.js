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
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold">Insights</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {posts.map((p)=> (
            <Card key={p.slug} className="bg-ovd-slate/70">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">A short preview of the insight to invite curiosity and action.</p>
                <div className="mt-4">
                  <Link href={`/marketing/insights/${p.slug}`}><a className="text-sm text-ovd-green">Read →</a></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
