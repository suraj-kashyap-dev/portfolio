const cur=document.getElementById('cur'),cur2=document.getElementById('cur2');

let mx=0,my=0,tx=0,ty=0;

if(window.innerWidth>768){
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx-5+'px';cur.style.top=my-5+'px';});

  setInterval(()=>{tx+=(mx-tx)*.13;ty+=(my-ty)*.13;cur2.style.left=tx-19+'px';cur2.style.top=ty-19+'px';},16);

  document.querySelectorAll('a,button,.ecard,.clnk,.tp').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cur.style.transform='scale(2.5)';cur.style.opacity='.35';});

    el.addEventListener('mouseleave',()=>{cur.style.transform='scale(1)';cur.style.opacity='1';});
  });
}

function toggleMobileNav(){
  const nav=document.getElementById('mobileNav');
  const btn=document.getElementById('hamburger');
  nav.classList.toggle('open');
  btn.classList.toggle('open');
}

function closeMobileNav(){
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in');}),{threshold:.08});

document.querySelectorAll('.reveal,.tli').forEach(el=>obs.observe(el));

const sObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.querySelectorAll('.skf').forEach(b=>{b.style.width=b.dataset.w+'%';});});
},{threshold:.15});

document.querySelectorAll('.skcat').forEach(g=>sObs.observe(g));

document.querySelectorAll('.mtc > div').forEach((line,i)=>{
  line.style.opacity='0';
  setTimeout(()=>{line.style.opacity='1';line.style.transition='opacity .3s';},1300+i*160);
});