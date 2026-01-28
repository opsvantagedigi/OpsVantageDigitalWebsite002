import React, { useEffect, useRef } from 'react'

export default function MarqueeLogos(){
  const ref = useRef()
  useEffect(()=>{
    const el = ref.current
    if(!el) return
    let pos = 0
    let raf
    function tick(){
      pos = (pos + 0.5) % el.scrollWidth
      el.scrollLeft = pos
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(raf)
  },[])

  const logos = ['/assets/logo.png','/assets/icon.png','/assets/logo.png','/assets/icon.png']

  return (
    <div style={{overflow:'hidden'}}>
      <div ref={ref} style={{display:'flex', gap: '2rem', alignItems:'center', whiteSpace:'nowrap'}}>
        {logos.map((l,i)=> (
          <img key={i} src={l} alt="client" style={{height:48, opacity:0.9}} />
        ))}
      </div>
    </div>
  )
}
