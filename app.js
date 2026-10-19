const $=s=>document.querySelector(s),CAL='https://cal.com/dani-serrano-mc095n/30min',WA='https://wa.me/34603782884';
const modal=document.createElement('div');modal.className='modal';
modal.innerHTML='<div class="sheet" role="dialog" aria-modal="true"><button class="x" aria-label="Cerrar">✕</button><h3>Reserva tu llamada de 30 min</h3><iframe title="Reservar en Cal.com"></iframe></div>';
const fr=modal.querySelector('iframe');
const openCal=()=>{if(!fr.getAttribute('src'))fr.src=CAL;modal.classList.add('on');document.body.style.overflow='hidden'};
const closeCal=()=>{modal.classList.remove('on');document.body.style.overflow=''};
modal.onclick=e=>{if(e.target===modal||e.target.className==='x')closeCal()};
addEventListener('keydown',e=>e.key==='Escape'&&closeCal());
const fabs=document.createElement('div');fabs.className='fabs';
fabs.innerHTML='<button class="fab c" data-cal aria-label="Agendar llamada">📅</button><a class="fab w" href="'+WA+'?text=Hola%20ROSER.AI,%20quiero%20informaci%C3%B3n%20sobre%20una%20web" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>';
document.body.append(modal,fabs);
document.querySelectorAll('[data-cal]').forEach(b=>b.onclick=openCal);
const h=$('header');$('.burger').onclick=()=>h.classList.toggle('open');
h.querySelectorAll('nav a').forEach(a=>a.onclick=()=>h.classList.remove('open'));
const lf=$('#lead');
if(lf)lf.onsubmit=e=>{e.preventDefault();const n=$('#n').value,t=$('#t').value;
open(WA+'?text='+encodeURIComponent('Hola ROSER.AI, soy '+n+'. Mi teléfono es '+t+'. Quiero que me llaméis hoy.'),'_blank');
$('#ok').textContent='✓ Se abre WhatsApp para enviarnos tus datos. Te llamamos hoy.';lf.reset()};
const hs=$('#hs'),rs=$('#rs');
function calc(){const a=+hs.value,r=+rs.value;$('#hv').textContent=a+' h';$('#rv').textContent=r+' €/h';$('#sv').textContent=(a*r*48).toLocaleString('es-ES')+' €';$('#fv').textContent=a*4+' horas/mes'}
if(hs){hs.oninput=rs.oninput=calc;calc()}
function chat(sel,title,intro,qs){const el=$(sel);if(!el)return;el.className='chat';
el.innerHTML='<div class="ch-h"><i></i><div>'+title+'<small>En línea 24/7</small></div></div><div class="ch-b"></div><div class="ch-c"></div><form class="ch-f"><input placeholder="Escribe tu pregunta…" aria-label="Tu pregunta"><button aria-label="Enviar">➤</button></form>';
const b=el.querySelector('.ch-b'),c=el.querySelector('.ch-c'),f=el.querySelector('form'),i=f.querySelector('input');
const add=(k,x)=>{const d=document.createElement('div');d.className='m '+k;d.innerHTML=x;b.append(d);b.scrollTop=b.scrollHeight};
const say=t=>{add('u',t.replace(/</g,'&lt;'));const q=qs.find(x=>x[1].test(t.toLowerCase()));
setTimeout(()=>add('',q?q[2]:'Eso lo vemos mejor en persona: <a href="'+WA+'" target="_blank" rel="noopener">escríbenos por WhatsApp</a> o <button onclick="openCal()">agenda una llamada</button>.'),450)};
add('',intro);qs.forEach(q=>{const x=document.createElement('button');x.textContent=q[0];x.onclick=()=>say(q[0]);c.append(x)});
f.onsubmit=e=>{e.preventDefault();if(i.value.trim()){say(i.value.trim());i.value=''}}}
const cv=$('#cv');
if(cv&&innerWidth>767&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const x=cv.getContext('2d');let w,hh,n;
const r=()=>{w=cv.width=cv.offsetWidth;hh=cv.height=cv.offsetHeight;n=Array.from({length:40},()=>({x:Math.random()*w,y:Math.random()*hh,a:(Math.random()-.5)*.5,b:(Math.random()-.5)*.5}))};
r();addEventListener('resize',r);
(function d(){x.clearRect(0,0,w,hh);n.forEach((p,i)=>{p.x+=p.a;p.y+=p.b;if(p.x<0||p.x>w)p.a*=-1;if(p.y<0||p.y>hh)p.b*=-1;x.fillStyle='rgba(180,170,255,.7)';x.fillRect(p.x,p.y,2,2);
for(let j=i+1;j<n.length;j++){const q=n[j],k=Math.hypot(p.x-q.x,p.y-q.y);if(k<120){x.strokeStyle='rgba(139,92,246,'+(1-k/120)*.3+')';x.beginPath();x.moveTo(p.x,p.y);x.lineTo(q.x,q.y);x.stroke()}}});requestAnimationFrame(d)})()}
