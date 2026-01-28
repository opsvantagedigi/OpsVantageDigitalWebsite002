import React from 'react'
import CountUp from 'react-countup'

const stats = [
  {label: 'ARR Influenced', value: 42},
  {label: 'Conversion Lifts (%)', value: 28},
  {label: 'Projects Delivered', value: 128}
]

export default function Counters(){
  return (
    <div style={{display:'flex', gap:'2rem', justifyContent:'center', marginTop:'1rem'}}>
      {stats.map((s,i)=> (
        <div key={i} style={{textAlign:'center'}}>
          <div style={{fontSize:'2rem', fontWeight:700}}>
            <CountUp end={s.value} duration={2.5} />{s.label.includes('%') ? '%' : ''}
          </div>
          <div style={{opacity:0.8}}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
