import React from 'react';
export function Badge({tone='honey',children,style,...rest}){
const T={
honey:{bg:'var(--honey-100)',c:'var(--honey-700)'},
meadow:{bg:'var(--secondary-soft)',c:'var(--meadow-700)'},
clay:{bg:'#F6E3DE',c:'var(--clay-600)'},
pond:{bg:'#E1EBEE',c:'var(--pond-500)'},
neutral:{bg:'var(--surface-tint)',c:'var(--ink-700)'},
ink:{bg:'var(--ink-900)',c:'var(--text-inverse)'}
}[tone];
return <span {...rest} style={{display:'inline-flex',alignItems:'center',gap:6,padding:'3px 10px',borderRadius:'var(--radius-pill)',background:T.bg,color:T.c,fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,lineHeight:'16px',whiteSpace:'nowrap',...style}}>{children}</span>;
}
