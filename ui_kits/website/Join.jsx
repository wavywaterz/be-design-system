function Join(){
const {Button,Card,Input,Select,Checkbox,Toast}=window.BeDesignSystem_748b5f;
const [name,setName]=React.useState('');
const [email,setEmail]=React.useState('');
const [why,setWhy]=React.useState('A daily practice');
const [digest,setDigest]=React.useState(false);
const [err,setErr]=React.useState(null);
const [toast,setToast]=React.useState(false);
const submit=()=>{
if(!email.includes('@')){setErr("That didn't take. Check the address.");return;}
setErr(null);setToast(true);setTimeout(()=>setToast(false),3200);
};
return <main data-screen-label="Join" style={{maxWidth:560,margin:'0 auto',padding:'72px 24px 96px'}}>
<div style={{textAlign:'center',marginBottom:28}}>
<h1 style={{margin:'0 0 10px',fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--text-3xl)',lineHeight:'var(--leading-tight)'}}>Join the hive</h1>
<p style={{margin:0,color:'var(--text-muted)',fontSize:'var(--text-md)'}}>One finding a morning, and the small act it suggests. We'll write when your circle opens.</p>
</div>
<Card padding={32}>
<div style={{display:'flex',flexDirection:'column',gap:18}}>
<Input label="Name" placeholder="How should we greet you?" value={name} onChange={e=>setName(e.target.value)}/>
<Input label="Email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} error={err} hint={err?undefined:"We write rarely."}/>
<Select label="What draws you?" value={why} onChange={e=>setWhy(e.target.value)}>
<option>The research, plainly told</option><option>The daily acts</option><option>Doing it together</option><option>All of it</option>
</Select>
<Checkbox checked={digest} onChange={setDigest} label="Send the morning digest — opt out anytime"/>
<Button size="lg" onClick={submit} style={{marginTop:6}}>Ask to join</Button>
</div>
</Card>
<p style={{textAlign:'center',fontSize:'var(--text-sm)',color:'var(--text-faint)',marginTop:16}}>Plain language. Cited sources. Nothing to buy but mornings.</p>
{toast&&<div style={{position:'fixed',left:'50%',bottom:28,transform:'translateX(-50%)',zIndex:60}}>
<Toast tone="success" title="Asked. Carry on." onDismiss={()=>setToast(false)}>We'll write when a circle opens near you.</Toast>
</div>}
</main>;
}
Object.assign(window,{Join});
