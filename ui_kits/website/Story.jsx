function Story({go}){
const {Button,Badge}=window.BeDesignSystem_748b5f;
return <main data-screen-label="Story" style={{maxWidth:'var(--container-narrow)',margin:'0 auto',padding:'80px 24px 96px'}}>
<Badge tone="meadow">The story</Badge>
<h1 style={{margin:'18px 0 24px',fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--text-3xl)',lineHeight:'var(--leading-tight)'}}>Named twice, on purpose</h1>
<p style={{fontSize:'var(--text-md)',margin:'0 0 20px'}}>A bee visits two thousand flowers a day and never sees the orchard it makes possible. The work is small, repetitive, almost invisible — and entire ecosystems stand on it.</p>
<p style={{fontSize:'var(--text-md)',margin:'0 0 20px'}}>We think feeling well works the same way. Not the highlight reel — the biology. Morning light before screens. A walk after eating. A meal at one table. Touch, breath, sleep. None of it is new; all of it is researched, and most of it is forgotten.</p>
<blockquote style={{margin:'36px 0',padding:'0 0 0 24px',borderLeft:'3px solid var(--accent)',fontFamily:'var(--font-display)',fontSize:'var(--text-xl)',lineHeight:1.3,fontStyle:'italic',color:'var(--ink-700)'}}>Wellness isn't an upgrade. It's a reminder — you are biology, together.</blockquote>
<p style={{fontSize:'var(--text-md)',margin:'0 0 20px'}}>So Be reads the research — chronobiology, social physiology, ecology — and hands you one finding a morning with the small act it suggests. Plain language, cited sources, no supplements to sell. Done alone it steadies you; done together it binds you, because co-regulation is biology too.</p>
<p style={{fontSize:'var(--text-md)',margin:'0 0 36px'}}>In harmony, quietly, together.</p>
<Button onClick={()=>go('join')}>Join the hive</Button>
</main>;
}
Object.assign(window,{Story});
