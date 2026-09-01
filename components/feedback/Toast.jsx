import React from 'react';
export function Toast({tone='honey',title,children,onDismiss,style}){
const dot={honey:'var(--honey-400)',success:'#7CAF74',danger:'#E08A76',info:'#8FB6C4'}[tone];
return <div role="status" style={{display:'flex',alignItems:'flex-start',gap:12,width:360,padding:'14px 16px',background:'var(--surface-inverse)',color:'var(--text-inverse)',borderRadius:'var(--radius-md)',boxShadow:'var(--shadow-3)',fontFamily:'var(--font-sans)',animation:'be-fade-up var(--dur-slow) var(--ease-out)',...style}}>
<span style={{width:10,height:10,borderRadius:'50%',background:dot,marginTop:5,flex:'none'}}></span>
<div style={{flex:1,minWidth:0}}>
{title&&<div style={{fontSize:14.5,fontWeight:600,lineHeight:'20px'}}>{title}</div>}
{children&&<div style={{fontSize:13.5,lineHeight:'19px',opacity:.75,marginTop:title?2:0}}>{children}</div>}
</div>
{onDismiss&&<button aria-label="Dismiss" onClick={onDismiss} style={{border:'none',background:'transparent',color:'var(--text-inverse)',opacity:.6,cursor:'pointer',padding:2,marginTop:2}}>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>}
</div>;
}
