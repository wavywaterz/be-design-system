import React from 'react';
export function Radio({checked=false,onChange,label,name,value,disabled=false,style}){
return <label style={{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',fontFamily:'var(--font-sans)',fontSize:15,opacity:disabled?.55:1,...style}}>
<span style={{position:'relative',width:20,height:20,flex:'none'}}>
<input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={()=>onChange&&onChange(value)} style={{position:'absolute',inset:0,opacity:0,margin:0,cursor:'inherit'}}/>
<span aria-hidden="true" style={{position:'absolute',inset:0,borderRadius:'50%',border:'1.5px solid var(--ink-900)',background:'var(--surface-card)',display:'flex',alignItems:'center',justifyContent:'center'}}>
<span style={{width:10,height:10,borderRadius:'50%',background:'var(--accent)',border:'2.5px solid var(--ink-900)',boxSizing:'border-box',transform:checked?'scale(1)':'scale(0)',transition:'transform var(--dur-fast) var(--ease-out)'}}></span>
</span></span>
{label&&<span>{label}</span>}
</label>;
}
