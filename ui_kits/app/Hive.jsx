function Hive({state}){
const {Card,Badge,Tag}=window.BeDesignSystem_748b5f;
const ST=window.BE_STORE;
const share=!!(state&&state.prefs&&state.prefs.share);
const mine=state&&state.acts?state.acts[ST.day.key()]:null;
const sample=['M','J','R','A','S','T','L','E','K','D','P','N'].map((m,i)=>({m,on:[0,2,3,7].includes(i),who:m}));
const circle=share?[{m:'You',on:mine==='yes',who:'You'},...sample]:sample;
const n=circle.filter(c=>c.on).length;
const av=(c,i)=><span key={i} role="img" aria-label={c.who+(c.on?' — trying today':' — resting')} title={c.on?'Trying today':'Resting'} style={{minWidth:44,height:44,padding:c.m.length>1?'0 10px':0,borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:600,fontSize:c.m.length>1?13:15,background:c.on?'var(--honey-300)':'var(--surface-tint)',border:c.on?'2.5px solid var(--honey-600)':'1.5px solid var(--border-subtle)',color:'var(--ink-900)',boxSizing:'border-box'}}>{c.m}{c.on?<span aria-hidden="true" style={{fontSize:10,marginLeft:2}}>✓</span>:null}</span>;
return <div style={{display:'flex',flexDirection:'column',gap:14}}>
<Card padding={22}>
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}}>
<div style={{fontWeight:600,fontSize:16}}>Your circle</div>
<Badge tone="meadow">{n} of {circle.length} alongside you today</Badge>
</div>
<div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:16}}>{circle.map(av)}</div>
<p style={{margin:'14px 0 0',fontFamily:'var(--font-mono)',fontSize:11.5,color:'var(--text-faint)'}}>A sample circle for now — yours forms when people you invite join.</p>
<p style={{margin:'12px 0 0',fontSize:13.5,color:'var(--text-muted)',lineHeight:1.5}}>{share?'Your circle sees one thing: whether you\u2019re trying or resting today. Never what, never why.':'Your circle sees nothing from you until you switch it on in You \u2014 \u201cLet my circle see how I\u2019m doing.\u201d'}</p>
<p style={{margin:'10px 0 0',fontSize:13.5,color:'var(--text-muted)'}}>No streaks, no rankings — just who's alongside you today. A shared act is always an invitation, never an expectation.</p>
<p style={{margin:'10px 0 0',fontSize:12.5,color:'var(--text-faint)',lineHeight:1.5}}>The bees taught us this: a forager dances what she found, plainly; the hive weighs the reports and decides together — no boss bee.</p>
</Card>
<Card padding={18}>
<div style={{fontSize:13,fontWeight:600,marginBottom:10}}>Shared acts this week</div>
<div style={{display:'flex',gap:8,flexWrap:'wrap'}}><Tag>Morning walk · Sat</Tag><Tag>One table dinner · Sun</Tag><Tag>Phones-down hour</Tag></div>
</Card>
</div>;
}
Object.assign(window,{Hive});
