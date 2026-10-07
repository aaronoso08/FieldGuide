(()=>{
  const title=document.querySelector('.topbar-title');const sub=document.querySelector('.topbar-sub');const icon=document.querySelector('.topbar-icon');
  if(title)title.textContent='Field Guide';if(sub)sub.textContent='Latino Built · Pro Source';if(icon){icon.textContent='LB';icon.setAttribute('aria-label','Latino Built');}
  const home=document.getElementById('screen-home');
  if(home){
    const h=home.querySelector('.home-title');if(h)h.innerHTML='What are you<br>looking at?';
    const s=home.querySelector('.home-sub');if(s)s.textContent='Quick field reference for contractors: identify systems, screen upgrade opportunities, and sharpen field knowledge.';
    const wrap=home.querySelector('div[style*="padding-top"]')||home.firstElementChild;
    if(wrap&&!document.getElementById('lb-kicker')){const k=document.createElement('div');k.id='lb-kicker';k.className='lb-kicker';k.textContent='Contractor field reference';wrap.insertBefore(k,wrap.firstChild);}
    const cards=[...home.querySelectorAll('.mode-card')];
    if(cards[0]){const t=cards[0].querySelector('.mode-title'),d=cards[0].querySelector('.mode-desc');if(t)t.textContent='Identify system';if(d)d.textContent='Use visible field clues to identify common heating and cooling equipment.';}
    if(cards[1]){const t=cards[1].querySelector('.mode-title'),d=cards[1].querySelector('.mode-desc');if(t)t.textContent='Screen upgrades';if(d)d.textContent='Check possible upgrade and incentive opportunities before confirming program details.';}
    if(cards[2]){const t=cards[2].querySelector('.mode-title'),d=cards[2].querySelector('.mode-desc');if(t)t.textContent='Learn & quiz';if(d)d.textContent='Practice common equipment and field clues in a few minutes.';}
  }
  const qTitle=document.querySelector('#screen-qualify .screen-title');if(qTitle)qTitle.textContent='Screen upgrades';
  const navQualify=document.getElementById('nav-qualify');if(navQualify){const nodes=[...navQualify.childNodes].filter(n=>n.nodeType===3);nodes.forEach(n=>{if(n.textContent.trim())n.textContent=' Screen '});}
  const qualify=document.getElementById('screen-qualify');
  if(qualify&&!document.getElementById('lb-program-note')){const n=document.createElement('div');n.id='lb-program-note';n.style.cssText='max-width:640px;margin:0 auto 14px;padding:10px 12px;border:1.5px solid #E8DDD4;border-left:4px solid #E87A2A;border-radius:10px;background:#FDF8F4;color:#5C4033;font:600 12px/1.5 DM Sans,sans-serif';n.innerHTML='<strong>Screening only:</strong> incentive programs and amounts change. Confirm current eligibility before quoting a customer.';const header=qualify.querySelector('.screen-header');if(header)header.insertAdjacentElement('afterend',n);}
})();