import React,{useState,useRef} from 'react';
export function Tabs({items=[],value,onChange,size='md','aria-label':ariaLabel,style}){
const[h,setH]=useState(null);const refs=useRef({});
const S={sm:{h:30,px:12,fs:13},md:{h:36,px:16,fs:14},lg:{h:44,px:18,fs:15}}[size]||{h:36,px:16,fs:14};
const move=d=>{const i=items.findIndex(it=>it.id===value);const n=items[(i+d+items.length)%items.length];if(!n)return;onChange&&onChange(n.id);const el=refs.current[n.id];el&&el.focus();};
const jump=i=>{const n=items[i];if(!n)return;onChange&&onChange(n.id);const el=refs.current[n.id];el&&el.focus();};
return <div role="tablist" aria-label={ariaLabel} onKeyDown={e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1)}else if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}else if(e.key==='Home'){e.preventDefault();jump(0)}else if(e.key==='End'){e.preventDefault();jump(items.length-1)}}} style={{display:'inline-flex',gap:4,padding:4,background:'var(--surface-sunken)',border:'1px solid var(--border-subtle)',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-sans)',...style}}>
{items.map(it=>{const act=it.id===value;
return <button key={it.id} ref={el=>{refs.current[it.id]=el}} role="tab" id={it.tabId} aria-controls={it.panelId} aria-selected={act} tabIndex={act?0:-1} onClick={()=>onChange&&onChange(it.id)}
onMouseEnter={()=>setH(it.id)} onMouseLeave={()=>setH(null)}
style={{height:S.h,padding:`0 ${S.px}px`,borderRadius:'var(--radius-pill)',border:'none',cursor:'pointer',fontFamily:'inherit',fontSize:S.fs,fontWeight:500,lineHeight:1,color:act?'var(--text-body)':'var(--text-muted)',background:act?'var(--surface-card)':h===it.id?'rgba(32,27,16,.05)':'transparent',boxShadow:act?'var(--shadow-1)':'none',transition:'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)'}}>{it.label}</button>;})}
</div>;
}
