import React from 'react';
export function Checkbox({checked=false,onChange,label,disabled=false,style}){
return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-sans)',fontSize:15,opacity:disabled?.55:1,...style}}>
<span style={{position:'relative',width:20,height:20,flex:'none'}}>
<input type="checkbox" checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(e.target.checked)} style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}}/>
<span aria-hidden="true" style={{position:'absolute',inset:0,borderRadius:6,border:'1.5px solid var(--ink-900)',background:checked?'var(--accent)':'var(--surface-card)',display:'flex',alignItems:'center',justifyContent:'center',transition:'background var(--dur-fast) var(--ease-out)'}}>
{checked&&<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ink-900)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
</span></span>
{label&&<span>{label}</span>}
</label>;
}
