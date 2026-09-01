import React,{useState} from 'react';
export function Input({label,hint,error,disabled=false,style,inputStyle,...rest}){
const[f,setF]=useState(false);
return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-sans)',opacity:disabled?.55:1,...style}}>
{label&&<span style={{fontSize:13,fontWeight:500,color:'var(--text-body)'}}>{label}</span>}
<input {...rest} disabled={disabled}
onFocus={e=>{setF(true);rest.onFocus&&rest.onFocus(e)}} onBlur={e=>{setF(false);rest.onBlur&&rest.onBlur(e)}}
style={{height:40,padding:'0 14px',borderRadius:'var(--radius-sm)',border:`1.5px solid ${error?'var(--danger)':f?'var(--ink-900)':'var(--border-subtle)'}`,background:'var(--surface-card)',color:'var(--text-body)',fontFamily:'var(--font-sans)',fontSize:15,outline:'none',boxShadow:f?'var(--focus-ring)':'none',transition:'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',...inputStyle}}/>
{error?<span style={{fontSize:13,color:'var(--danger)'}}>{error}</span>:hint?<span style={{fontSize:13,color:'var(--text-muted)'}}>{hint}</span>:null}
</label>;
}
