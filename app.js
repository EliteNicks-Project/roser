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
$('#ok').textContent='✓ Listo. Se abre WhatsApp para enviarnos tus datos y te llamamos hoy.';lf.reset()};
const hs=$('#hs'),rs=$('#rs');
function calc(){const a=+hs.value,r=+rs.value;$('#hv').textContent=a+' h';$('#rv').textContent=r+' €/h';$('#sv').textContent=(a*r*48).toLocaleString('es-ES')+' €';$('#fv').textContent=a*4+' horas/mes'}
if(hs){hs.oninput=rs.oninput=calc;calc()}
window.ask=(i,t)=>{const b=$('#chat'),add=(c,x)=>{const d=document.createElement('div');d.className='m '+c;d.innerHTML=x;b.append(d);b.scrollTop=b.scrollHeight};
add('u',t);setTimeout(()=>add('',i?'La revisión técnica completa cuesta <b>49 €</b>. ¿Te reservo hora?':'¡Sí! Quedan 2 huecos mañana: <b>11:30h</b> y <b>17:00h</b>. ¿Cuál prefieres?'),500)};
