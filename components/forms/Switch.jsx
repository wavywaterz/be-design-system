import React from 'react';
export function Switch({checked=false,onChange,label,disabled=false,style}){
return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-sans)',fontSize:15,opacity:disabled?.55:1,...style}}>
<span style={{position:'relative',width:42,height:24,flex:'none'}}>
<input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={e=>onChange&&onChange(e.target.checked)} style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}}/>
<span aria-hidden="true" style={{position:'absolute',inset:0,borderRadius:'var(--radius-pill)',background:checked?'var(--accent)':'var(--ink-200)',border:'1.5px solid '+(checked?'var(--honey-600)':'var(--border-strong)'),transition:'background var(--dur-base) var(--ease-out)'}}></span>
<span aria-hidden="true" style={{position:'absolute',top:3,left:checked?21:3,width:18,height:18,borderRadius:'50%',background:'#FFFEFA',boxShadow:'var(--shadow-1)',transition:'left var(--dur-base) var(--ease-out)'}}></span>
</span>
{label&&<span>{label}</span>}
</label>;
}
