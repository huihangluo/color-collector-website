const toggle=document.querySelector('.lang-toggle');
let lang='zh';
toggle.addEventListener('click',()=>{
  lang=lang==='zh'?'en':'zh';
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh]').forEach(el=>el.innerHTML=el.dataset[lang]);
  toggle.textContent=lang==='zh'?'EN':'中';
});

document.querySelectorAll('.swatch').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelector('.swatch.active')?.classList.remove('active');
    button.classList.add('active');
    const color=button.dataset.color;
    document.querySelector('.palette-player').style.filter=`sepia(1) saturate(7) drop-shadow(0 28px 14px rgba(23,36,29,.2)) drop-shadow(0 0 12px ${color})`;
    document.querySelector('.palette-stage').style.backgroundColor=color;
  });
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
