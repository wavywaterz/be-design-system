import React,{useState} from 'react';
export function Select({label,hint,error,disabled=false,children,style,selectStyle,...rest}){
const[f,setF]=useState(false);
return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-sans)',opacity:disabled?.55:1,...style}}>
{label&&<span style={{fontSize:13,fontWeight:500}}>{label}</span>}
<span style={{position:'relative',display:'flex'}}>
<select {...rest} disabled={disabled}
onFocus={e=>{setF(true);rest.onFocus&&rest.onFocus(e)}} onBlur={e=>{setF(false);rest.onBlur&&rest.onBlur(e)}}
style={{appearance:'none',WebkitAppearance:'none',width:'100%',height:40,padding:'0 38px 0 14px',borderRadius:'var(--radius-sm)',border:`1.5px solid ${error?'var(--danger)':f?'var(--ink-900)':'var(--border-subtle)'}`,background:'var(--surface-card)',color:'var(--text-body)',fontFamily:'var(--font-sans)',fontSize:15,outline:'none',boxShadow:f?'var(--focus-ring)':'none',cursor:disabled?'not-allowed':'pointer',transition:'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',...selectStyle}}>{children}</select>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',pointerEvents:'none',color:'var(--ink-500)'}}><path d="m6 9 6 6 6-6"/></svg>
</span>
{error?<span style={{fontSize:13,color:'var(--danger)'}}>{error}</span>:hint?<span style={{fontSize:13,color:'var(--text-muted)'}}>{hint}</span>:null}
</label>;
}
