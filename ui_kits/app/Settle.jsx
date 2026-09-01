function Settle({notify,record}){
const {Card,Badge,Button}=window.BeDesignSystem_748b5f;
const [step,setStep]=React.useState(0);
const [level,setLevel]=React.useState(null);
const names=['Anger','Grief','Worry','Hurt','Static'];
const reset=()=>{setStep(0);setLevel(null);};
const finish=moved=>{record&&record({id:'settle',c:moved?'yes':'no'});notify(moved?{tone:'success',title:'Acknowledged.',body:'It moved through you, not into someone. Nothing wasted.'}:{tone:'honey',title:'Still here \u2014 that\u2019s okay.',body:'Some charges take longer. You met it; that already counts.'});reset();};
const act=level>=5?'Move it — walk it off before words. Return when your shoulders drop.':level>=3?'One minute away — window, water, sky. Then five long exhales.':'Five breaths, each exhale a little longer than the in-breath.';
return <Card padding={22}>
<Badge tone="honey">When a charge arrives</Badge>
{step===0&&<div>
<p style={{margin:'12px 0 4px',fontSize:15,color:'var(--ink-700)',lineHeight:1.55}}>Anger, grief, static — a charge is biology arriving, not a flaw. It's welcome here. Acknowledging it, gently, is how harm shrinks.</p>
<div style={{display:'flex',gap:10,marginTop:14}}><Button variant="secondary" onClick={()=>setStep(1)}>Settle with it</Button><Button variant="ghost" onClick={()=>notify({tone:'honey',title:'Honored.',body:'It can wait. This will be here when you are.'})}>Not now</Button></div>
</div>}
{step===1&&<div>
<p style={{margin:'12px 0 2px',fontWeight:600,fontSize:15}}>Comprehend — name it, gently.</p>
<p style={{margin:'0 0 12px',fontSize:13,color:'var(--text-muted)'}}>Putting a feeling into words quiets the alarm. <span style={{fontFamily:'var(--font-mono)',fontSize:11.5}}>(Psychological Science, 2007)</span></p>
<div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{names.map(n=><Button key={n} variant="ghost" onClick={()=>setStep(2)} style={{minHeight:44}}>{n}</Button>)}</div>
</div>}
{step===2&&<div>
<p style={{margin:'12px 0 12px',fontWeight:600,fontSize:15}}>Measure — how much is it carrying?</p>
<div style={{display:'flex',gap:10}}>{[1,2,3,4,5].map(v=><button key={v} onClick={()=>{setLevel(v);setStep(3);}} aria-label={'Level '+v+' of 5'} style={{width:44,height:44,borderRadius:'50%',border:'1.5px solid var(--border-strong)',background:'var(--surface-tint)',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:600,color:'var(--ink-900)',cursor:'pointer'}}>{v}</button>)}</div>
<p style={{margin:'12px 0 0',fontSize:12.5,color:'var(--text-faint)'}}>1 — a hum · 5 — a storm. Any answer is right.</p>
</div>}
{step===3&&<div>
<p style={{margin:'12px 0 2px',fontWeight:600,fontSize:15}}>Manage — let it move.</p>
<p style={{margin:'0 0 4px',fontSize:15,color:'var(--ink-700)',lineHeight:1.55}}>{act}</p>
<p style={{margin:'0 0 14px',fontSize:13,color:'var(--text-muted)'}}>Long exhales settle the body's arousal. <span style={{fontFamily:'var(--font-mono)',fontSize:11.5}}>(Cell Reports Medicine, 2023)</span></p>
<div style={{display:'flex',gap:10}}><Button onClick={()=>finish(true)}>It moved</Button><Button variant="ghost" onClick={()=>finish(false)}>Still here</Button></div>
</div>}
{step>0&&<button onClick={reset} style={{marginTop:10,border:'none',background:'transparent',color:'var(--text-muted)',fontSize:13,cursor:'pointer',textDecoration:'underline',textUnderlineOffset:3,padding:'14px 10px',margin:'0 -10px'}}>set it down for now</button>}
</Card>;
}
Object.assign(window,{Settle});
