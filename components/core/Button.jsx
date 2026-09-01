import React,{useState} from 'react';
export function Button({variant='primary',size='md',disabled=false,icon,children,style,...rest}){
const[h,setH]=useState(false),[p,setP]=useState(false);
const S={sm:{h:32,px:14,fs:13},md:{h:40,px:18,fs:15},lg:{h:48,px:24,fs:16}}[size];
const V={
primary:{bg:h?'var(--accent-hover)':'var(--accent)',c:'var(--text-on-accent)',bd:'1.5px solid transparent'},
secondary:{bg:h?'var(--surface-tint)':'transparent',c:'var(--text-body)',bd:'1.5px solid var(--ink-900)'},
ghost:{bg:h?'var(--surface-tint)':'transparent',c:'var(--text-body)',bd:'1.5px solid transparent'},
danger:{bg:h?'var(--clay-600)':'var(--danger)',c:'#FFFEFA',bd:'1.5px solid transparent'},
inverse:{bg:h?'var(--ink-700)':'var(--ink-900)',c:'var(--text-inverse)',bd:'1.5px solid transparent'}
}[variant];
return <button {...rest} disabled={disabled}
onMouseEnter={e=>{setH(true);rest.onMouseEnter&&rest.onMouseEnter(e)}}
onMouseLeave={e=>{setH(false);setP(false);rest.onMouseLeave&&rest.onMouseLeave(e)}}
onMouseDown={e=>{setP(true);rest.onMouseDown&&rest.onMouseDown(e)}}
onMouseUp={e=>{setP(false);rest.onMouseUp&&rest.onMouseUp(e)}}
style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,height:S.h,padding:`0 ${S.px}px`,borderRadius:'var(--radius-pill)',border:V.bd,background:V.bg,color:V.c,fontFamily:'var(--font-sans)',fontSize:S.fs,fontWeight:500,lineHeight:1,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transform:p&&!disabled?'scale(.98)':'none',transition:'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',...style}}>{icon}{children}</button>;
}
