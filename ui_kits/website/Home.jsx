function Home({go}){
const {Button,Badge,Card,Dialog}=window.BeDesignSystem_748b5f;
const [dlg,setDlg]=React.useState(false);
return <main>
<section data-screen-label="Home hero" style={{background:"var(--surface-page) url('"+window.BE_ASSETS.pattern+"')",padding:'96px 24px 88px',textAlign:'center'}}>
<div style={{maxWidth:820,margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:24}}>
<img src={window.BE_ASSETS.logo} width="88" alt="" style={{animation:'be-float 3.4s var(--ease-inout) infinite'}}/>
<Badge tone="honey">Now pollinating — spring cohort</Badge>
<h1 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--text-4xl)',lineHeight:'var(--leading-tight)',letterSpacing:'var(--tracking-display)'}}>Be here. The rest <em>follows</em>.</h1>
<p style={{margin:0,maxWidth:560,fontSize:'var(--text-md)',color:'var(--text-muted)'}}>Be turns biology research into small daily acts — reminders that you are an organism first: light, breath, movement, and each other.</p>
<div style={{display:'flex',gap:12,marginTop:8}}>
<Button size="lg" onClick={()=>go('join')}>Start being</Button>
<Button size="lg" variant="secondary" onClick={()=>setDlg(true)}>What is Be?</Button>
</div>
</div>
</section>
<section data-screen-label="Pillars" style={{maxWidth:'var(--container)',margin:'0 auto',padding:'72px 24px'}}>
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
<Card padding={28}><h3 style={{margin:'0 0 8px',fontSize:'var(--text-lg)',fontWeight:600}}>One finding, daily</h3><p style={{margin:0,fontSize:'var(--text-base)',color:'var(--text-muted)'}}>A single piece of biology research each morning, translated into a five-minute act. Morning light moves your clock. <span style={{fontFamily:'var(--font-mono)',fontSize:12}}>(Current Biology, 2013)</span></p></Card>
<Card padding={28}><h3 style={{margin:'0 0 8px',fontSize:'var(--text-lg)',fontWeight:600}}>A hive, not a feed</h3><p style={{margin:0,fontSize:'var(--text-base)',color:'var(--text-muted)'}}>Togetherness is biology too — shared meals and synced walks, because strong social ties are among the best-studied predictors of a long life. <span style={{fontFamily:'var(--font-mono)',fontSize:12}}>(PLoS Medicine, 2010)</span></p></Card>
<Card padding={28}><h3 style={{margin:'0 0 8px',fontSize:'var(--text-lg)',fontWeight:600}}>Remember you're an organism</h3><p style={{margin:0,fontSize:'var(--text-base)',color:'var(--text-muted)'}}>Not optimization — remembering. About two hours a week in nature is where reported health and wellbeing rise. <span style={{fontFamily:'var(--font-mono)',fontSize:12}}>(Scientific Reports, 2019)</span></p></Card>
</div>
</section>
<section data-screen-label="Manifesto band" style={{background:'var(--surface-inverse)',color:'var(--text-inverse)',padding:'80px 24px',textAlign:'center'}}>
<div style={{maxWidth:720,margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:20}}>
<img src={window.BE_ASSETS.logoInverse} width="56" alt=""/>
<p style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.25}}>A colony survives by ten thousand small acts of care, <em>none of them heroic.</em></p>
<Button variant="primary" onClick={()=>go('story')}>Read the story</Button>
</div>
</section>
<Dialog open={dlg} onClose={()=>setDlg(false)} title="What is Be?"
footer={<><Button variant="ghost" onClick={()=>setDlg(false)}>Not yet</Button><Button onClick={()=>{setDlg(false);go('join')}}>Join the hive</Button></>}>
Be is named twice: for the bee, the small keeper of whole ecosystems, and for being — a body, an organism, part of the whole. Each morning we hand you one piece of biology research and the small act it suggests, to do alone or together. Wellness by remembering what you are.
</Dialog>
</main>;
}
Object.assign(window,{Home});
