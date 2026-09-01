import React from 'react';
export function Card({variant='default',padding=24,children,style,...rest}){
const V={
default:{background:'var(--surface-card)',border:'1px solid var(--border-subtle)',boxShadow:'var(--shadow-2)',color:'var(--text-body)'},
tint:{background:'var(--surface-tint)',border:'1px solid transparent',boxShadow:'none',color:'var(--text-body)'},
inverse:{background:'var(--surface-inverse)',border:'1px solid transparent',boxShadow:'var(--shadow-2)',color:'var(--text-inverse)'},
outline:{background:'transparent',border:'1.5px solid var(--ink-900)',boxShadow:'none',color:'var(--text-body)'}
}[variant];
return <div {...rest} style={{borderRadius:'var(--radius-lg)',padding,...V,...style}}>{children}</div>;
}
