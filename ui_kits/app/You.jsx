function You({state,setState,notify,forget}){
const {Card,Badge,Button,Switch}=window.BeDesignSystem_748b5f;
const ST=window.BE_STORE;
const set=(k,v)=>setState(s=>({...s,prefs:{...s.prefs,[k]:v}}));
const [confirm,setConfirm]=React.useState(false);
// Learning with anonymity: plain counts from state.log, on this device only. Counts never content · opt-in blended aggregates only · forgetting is one plain ask.
const c=ST.counts(state.log);
const names={light:'Morning light',nature:'Time in green',ties:'Check-ins',breath:'Long exhales',naming:'Naming feelings',pollen:'Tending something',touch:'Asked-for embraces',laugh:'Shared giggles',settle:'Charges met'};
const rows=Object.keys(names).filter(k=>c[k]).map(k=>({k,label:names[k],a:c[k].yes,b:c[k].no,w:k==='settle'?['moved','still here']:['tried','rested']}));
const days=new Set((state.log||[]).map(e=>e.k).filter(Boolean)).size;
const mono={fontFamily:'var(--font-mono)',fontSize:12.5,color:'var(--text-muted)',whiteSpace:'nowrap'};
const keep=()=>{const ok=ST.download('be-counts-'+ST.day.key()+'.txt',ST.exportText(state));notify(ok?{tone:'info',title:'Yours to keep.',body:'A small text file of counts \u2014 nothing else exists to give.'}:{tone:'danger',title:'That didn\u2019t take.',body:'Try again.'});};
const sync=()=>notify(state.prefs.share?{tone:'info',title:'All caught up.',body:'Only today\u2019s trying-or-resting left your hands \u2014 no words, no names.'}:{tone:'honey',title:'Nothing to send.',body:'Sharing is off, so nothing left your hands. Switch it on above if you\u2019d like your circle to see how you\u2019re doing.'});
return <div style={{display:'flex',flexDirection:'column',gap:14}}>
<Card padding={22}>
<div style={{fontWeight:600,fontSize:16,marginBottom:14}}>Consent & quiet</div>
<div style={{display:'flex',flexDirection:'column',gap:14}}>
<Switch checked={!!state.prefs.bigText} onChange={v=>set('bigText',v)} label="Larger text"/>
<Switch checked={!!state.prefs.digest} onChange={v=>set('digest',v)} label="A gentle morning note — leave anytime"/>
<Switch checked={state.prefs.quiet!==false} onChange={v=>set('quiet',v)} label="Evenings kept quiet, after 9"/>
<Switch checked={!!state.prefs.share} onChange={v=>set('share',v)} label="Let my circle see how I'm doing"/>
</div>
<p style={{margin:'14px 0 0',fontSize:12.5,color:'var(--text-faint)'}}>Nothing is on until you say so — no is always a safe answer here. Be also listens to your device's own settings: gentler motion, higher contrast, screen readers, zoom.</p>
</Card>
<Card padding={22}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8,flexWrap:'wrap',marginBottom:6}}><div style={{fontWeight:600,fontSize:16}}>What Be is learning — beside you</div><Badge tone="neutral">This device only</Badge></div>
<p style={{margin:'0 0 12px',fontSize:13,color:'var(--text-muted)',lineHeight:1.5}}>Plain counts, never words. {days===0?'No days noted yet.':days===1?'One day noted.':days+' days noted.'}</p>
{rows.length===0?<p style={{margin:0,fontSize:13.5,color:'var(--text-faint)'}}>Nothing here yet. Whatever you try or rest from on Today gathers here, as arithmetic.</p>:
<div style={{display:'grid',gridTemplateColumns:'1fr auto auto',gap:'8px 14px',fontSize:13.5,alignItems:'baseline'}}>
{rows.map(r=><React.Fragment key={r.k}><span>{r.label}</span><span style={mono}>{r.w[0]} {r.a}</span><span style={mono}>{r.w[1]} {r.b}</span></React.Fragment>)}
</div>}
<div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:16}}>
<Button variant="secondary" size="sm" onClick={keep}>Take my counts with me</Button>
{!confirm&&<Button variant="ghost" size="sm" onClick={()=>setConfirm(true)}>Ask Be to forget everything</Button>}
</div>
{confirm&&<div role="group" aria-label="Forget everything?" style={{marginTop:12,padding:'12px 14px',border:'1.5px solid var(--border-strong)',borderRadius:'var(--radius-md)'}}>
<p style={{margin:'0 0 10px',fontSize:13.5,lineHeight:1.5}}>Forget everything here — counts, choices, switches? It happens now and can't be undone. No is a fine answer.</p>
<div style={{display:'flex',gap:10}}><Button variant="danger" size="sm" onClick={()=>{setConfirm(false);forget&&forget()}}>Yes, forget</Button><Button variant="ghost" size="sm" onClick={()=>setConfirm(false)}>Keep it</Button></div>
</div>}
</Card>
<Card variant="tint" padding={20}>
<div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}><Badge tone="meadow">Offline-ready</Badge></div>
<p style={{margin:0,fontSize:13.5,color:'var(--ink-700)',lineHeight:1.55}}>Be is whole without a signal — today's note, your choices, your pace all live here with you. It reaches out only when you ask.</p>
<Button variant="secondary" size="sm" style={{marginTop:14}} onClick={sync}>Catch up with my circle</Button>
</Card>
</div>;
}
Object.assign(window,{You});
