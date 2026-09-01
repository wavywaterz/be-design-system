import React,{useState} from 'react';
export function Tag({onRemove,children,style,...rest}){
const[h,setH]=useState(false);
return <span {...rest} style={{display:'inline-flex',alignItems:'center',gap:4,padding:onRemove?'4px 6px 4px 12px':'4px 12px',borderRadius:'var(--radius-pill)',background:'var(--surface-tint)',border:'1px solid var(--border-subtle)',color:'var(--ink-700)',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:500,lineHeight:'18px',...style}}>{children}
{onRemove&&<button aria-label="Remove" onClick={onRemove} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:18,height:18,borderRadius:'50%',border:'none',background:h?'var(--ink-200)':'transparent',color:'var(--ink-700)',cursor:'pointer',padding:0,transition:'background var(--dur-fast) var(--ease-out)'}}>
<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>}
</span>;
}
