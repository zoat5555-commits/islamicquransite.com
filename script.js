window.onload = ()=>{
    document.querySelectorAll('section').forEach(sec=>sec.classList.add('visible'));
    document.querySelectorAll('.auth-box').forEach(box=>{box.style.opacity=1;box.style.transform='translateY(0)';});
};

const links=document.querySelectorAll('nav a');
const sections=document.querySelectorAll('section');
links.forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        const targetId=link.getAttribute('href').replace('#','');
        sections.forEach(sec=>{sec.style.display='none';sec.classList.remove('visible');});
        const targetSec=document.getElementById(targetId);
        if(targetSec){targetSec.style.display='block';setTimeout(()=>targetSec.classList.add('visible'),50);}
        links.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
    });
});

const searchInput=document.querySelector('#search');
const ayahs=document.querySelectorAll('.ayah');
searchInput?.addEventListener('keyup',()=>{
    const val=searchInput.value.toLowerCase();
    ayahs.forEach(a=>{a.classList.remove('active-highlight');if(a.innerText.toLowerCase().includes(val)&&val!==''){a.classList.add('active-highlight');a.scrollIntoView({behavior:'smooth',block:'center'});}});
});
ayahs.forEach(a=>a.addEventListener('click',()=>{ayahs.forEach(el=>el.classList.remove('active-highlight'));a.classList.add('active-highlight');}));
