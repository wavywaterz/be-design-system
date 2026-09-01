import React,{useState} from 'react';
export function Tooltip({label,side='top',children,style}){
const[on,setOn]=useState(false);
const pos=side==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
return <span style={{position:'relative',display:'inline-flex',...style}}
onMouseEnter={()=>setOn(true)} onMouseLeave={()=>setOn(false)} onFocus={()=>setOn(true)} onBlur={()=>setOn(false)}>
{children}
{on&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,background:'var(--surface-inverse)',color:'var(--text-inverse)',fontFamily:'var(--font-sans)',fontSize:12.5,fontWeight:500,lineHeight:'16px',padding:'6px 10px',borderRadius:8,whiteSpace:'nowrap',boxShadow:'var(--shadow-2)',zIndex:50,pointerEvents:'none',animation:'be-fade var(--dur-fast) var(--ease-out)'}}>{label}</span>}
</span>;
}
