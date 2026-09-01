import React,{useState} from 'react';
export function IconButton({variant='soft',size='md',disabled=false,label,children,style,...rest}){
const[h,setH]=useState(false),[p,setP]=useState(false);
const d={sm:28,md:36,lg:44}[size];
const V={
solid:{bg:h?'var(--accent-hover)':'var(--accent)',c:'var(--text-on-accent)',bd:'1.5px solid transparent'},
soft:{bg:h?'var(--nectar-200)':'var(--surface-tint)',c:'var(--text-body)',bd:'1.5px solid transparent'},
ghost:{bg:h?'var(--surface-tint)':'transparent',c:'var(--text-body)',bd:'1.5px solid transparent'},
outline:{bg:h?'var(--surface-tint)':'transparent',c:'var(--text-body)',bd:'1.5px solid var(--ink-900)'}
}[variant];
return <button {...rest} aria-label={label} title={label} disabled={disabled}
onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:d,height:d,flex:'none',borderRadius:'50%',border:V.bd,background:V.bg,color:V.c,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transform:p&&!disabled?'scale(.94)':'none',transition:'background var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',...style}}>{children}</button>;
}
