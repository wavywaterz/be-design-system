// Be — on-device store. Versioned, validated, forgettable. Only counts ever leave (and only when asked).
(function(){
const KEY='be.app.v2',OLD='be.app.demo.v1',LOG_MAX=400,TABS=['today','hive','you'];
const pad=n=>String(n).padStart(2,'0');
const day={
key(d=new Date()){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())},
num(d=new Date()){return Math.floor((d.getTime()-d.getTimezoneOffset()*60000)/86400000)},
finding(d=new Date()){const F=window.BE_FINDINGS||[];if(!F.length)return null;return F[((day.num(d)%F.length)+F.length)%F.length]}
};
const fresh=()=>({v:2,tab:'today',acts:{},prefs:{},log:[]});
const read=k=>{try{const r=localStorage.getItem(k);return r?JSON.parse(r):null}catch(e){return null}};
const obj=x=>x&&typeof x==='object'&&!Array.isArray(x)?x:{};
function sanitize(s){s=obj(s);return {v:2,tab:TABS.includes(s.tab)?s.tab:'today',acts:obj(s.acts),prefs:obj(s.prefs),log:(Array.isArray(s.log)?s.log:[]).filter(e=>e&&typeof e.id==='string').slice(-LOG_MAX)};}
function load(){const cur=read(KEY);if(cur)return sanitize(cur);
const old=read(OLD);if(old){const m=sanitize({...old,acts:{}});try{localStorage.removeItem(OLD)}catch(e){}return m;} // v1 keyed acts by finding, not by day: start today clean, keep prefs + counts
return fresh();}
function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch(e){return false}}
function forget(){try{localStorage.removeItem(KEY);localStorage.removeItem(OLD)}catch(e){}return fresh();}
function counts(log){const c={};(log||[]).forEach(e=>{c[e.id]=c[e.id]||{yes:0,no:0};c[e.id][e.c==='yes'?'yes':'no']++;});return c;}
function exportText(s){const c=counts(s.log);const on=Object.keys(s.prefs||{}).filter(k=>s.prefs[k]).join(', ');
const lines=['Be \u2014 what stays with you','Exported '+day.key()+' (your local date)','','Counts only. Be keeps no words, notes, names, or times \u2014 so there are none to export.',''];
Object.keys(c).forEach(k=>lines.push(k+': '+(k==='settle'?'moved '+c[k].yes+' \u00b7 still here '+c[k].no:'tried '+c[k].yes+' \u00b7 rested '+c[k].no)));
if(!Object.keys(c).length)lines.push('(nothing noted yet)');
lines.push('','Switches on: '+(on||'none'));return lines.join('\n');}
function download(name,text){try{const b=new Blob([text],{type:'text/plain;charset=utf-8'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);return true}catch(e){return false}}
window.BE_STORE={KEY,LOG_MAX,day,fresh,load,save,forget,counts,exportText,download};
})();
