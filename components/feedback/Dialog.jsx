import React,{useEffect,useRef,useId} from 'react';
import {IconButton} from '../core/IconButton.jsx';
const FOCUSABLE='button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
export function Dialog({open=false,onClose,title,children,footer,width=480,style}){
const box=useRef(null);const closeRef=useRef(onClose);closeRef.current=onClose;
const tid='be-dialog-title'+useId();
useEffect(()=>{if(!open)return;const prev=document.activeElement;
const t=setTimeout(()=>{box.current&&box.current.focus()},0);
const k=e=>{if(e.key==='Escape'){closeRef.current&&closeRef.current();return}
if(e.key!=='Tab'||!box.current)return;const f=[...box.current.querySelectorAll(FOCUSABLE)];if(!f.length){e.preventDefault();return}
const first=f[0],last=f[f.length-1],a=document.activeElement;
if(e.shiftKey&&(a===first||a===box.current)){e.preventDefault();last.focus()}else if(!e.shiftKey&&a===last){e.preventDefault();first.focus()}};
window.addEventListener('keydown',k);
return()=>{clearTimeout(t);window.removeEventListener('keydown',k);prev&&prev.focus&&prev.focus()};},[open]);
if(!open)return null;
return <div onClick={e=>{if(e.target===e.currentTarget&&onClose)onClose()}} style={{position:'fixed',inset:0,zIndex:100,background:'rgba(32,27,16,.44)',backdropFilter:'blur(4px)',WebkitBackdropFilter:'blur(4px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,animation:'be-fade var(--dur-base) var(--ease-out)'}}>
<div ref={box} role="dialog" aria-modal="true" aria-labelledby={title?tid:undefined} tabIndex={-1} style={{width:'100%',maxWidth:width,background:'var(--surface-card)',borderRadius:'var(--radius-xl)',boxShadow:'var(--shadow-3)',padding:28,fontFamily:'var(--font-sans)',outline:'none',animation:'be-fade-up var(--dur-slow) var(--ease-out)',...style}}>
<div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,marginBottom:12}}>
{title&&<h2 id={tid} style={{margin:0,fontFamily:'var(--font-display)',fontSize:26,lineHeight:1.15,fontWeight:400}}>{title}</h2>}
{onClose&&<IconButton label="Close" variant="ghost" size="sm" onClick={onClose} style={{marginTop:-2}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></IconButton>}
</div>
<div style={{fontSize:15,lineHeight:'var(--leading-body)',color:'var(--ink-700)'}}>{children}</div>
{footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:10,marginTop:24}}>{footer}</div>}
</div></div>;
}
