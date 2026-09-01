function Today({state,setState,notify,record}){
const {Card,Badge,Button}=window.BeDesignSystem_748b5f;
const ST=window.BE_STORE;
const f=ST.day.finding();const k=ST.day.key();
if(!f)return <Card padding={22}><p style={{margin:0,color:'var(--text-muted)'}}>Nothing here yet. Plant something.</p></Card>;
const done=state.acts[k];
const mark=v=>{setState(s=>({...s,acts:{...s.acts,[k]:v}}));record({id:f.id,c:v});notify(v==='yes'?{tone:'success',title:'Welcome in.',body:'However small, it counts. Go gently.'}:{tone:'honey',title:'Honored.',body:'Rest is biology too. Tomorrow will hold it for you.'});};
const undo=()=>setState(s=>{const a={...s.acts};delete a[k];return {...s,acts:a,log:(s.log||[]).filter(e=>!(e.k===k&&e.id===f.id))}});
return <div style={{display:'flex',flexDirection:'column',gap:14}}>
<div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-muted)'}}>{new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div>
<Card padding={22}>
<Badge tone="honey">Today's finding</Badge>
<p style={{margin:'12px 0 4px',fontFamily:'var(--font-display)',fontSize:24,lineHeight:1.2}}>{f.finding}</p>
<div style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-muted)'}}>{f.cite}</div>
<p style={{margin:'14px 0 0',fontSize:15,color:'var(--ink-700)'}}>{f.act}</p>
{f.why&&<p style={{margin:'10px 0 0',fontSize:12.5,color:'var(--text-muted)',lineHeight:1.5}}>Why we trust it: {f.why}</p>}
{!done&&<div style={{display:'flex',gap:10,marginTop:18}}>
<Button onClick={()=>mark('yes')}>I'll try it</Button>
<Button variant="ghost" onClick={()=>mark('no')}>Not today</Button>
</div>}
{done&&<div style={{marginTop:18,display:'flex',alignItems:'center',gap:8}}>
<Badge tone={done==='yes'?'meadow':'neutral'}>{done==='yes'?'Trying it today':'Resting today'}</Badge>
<button onClick={undo} style={{border:'none',background:'transparent',color:'var(--text-muted)',fontSize:13,cursor:'pointer',textDecoration:'underline',textUnderlineOffset:3,padding:'12px 10px',margin:'-12px -10px'}}>change my mind</button>
</div>}
</Card>
<Card variant="tint" padding={18}>
<div style={{fontSize:13,color:'var(--text-muted)',lineHeight:1.5}}>Each morning, one gentle reminder from biology — plain words, real source, and the small act it suggests. Take it or leave it; both are welcome. Everything stays here with you unless you choose to share it.</div>
</Card>
{window.Settle&&React.createElement(window.Settle,{notify,record})}
</div>;
}
Object.assign(window,{Today});
