(function(){
  const cursor=document.getElementById('cursor');
  if(cursor){
    document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
    document.querySelectorAll('a,button,.why-card,.offering-card,.ethics-card,.policy-card').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'))});
  }
  const navbar=document.getElementById('navbar');
  function getPageId(){
    const path=window.location.pathname;
    const page=path.split('/').pop()||'index.html';
    if(page==='about.html') return 'about';
    if(page==='offerings.html') return 'offerings';
    if(page==='connect.html') return 'booking';
    if(page==='policies.html') return 'policies';
    return 'home';
  }
  function getLinkId(a){
    const href=a.getAttribute('href')||'';
    if(href.startsWith('index.html')) return href.includes('#')?href.split('#')[1]:'home';
    if(href==='about.html') return 'about';
    if(href==='offerings.html') return 'offerings';
    if(href==='connect.html') return 'booking';
    if(href==='policies.html') return 'policies';
    return null;
  }
  function updateActiveNav(){
    const navLinks=document.querySelectorAll('.nav-links a');
    const sections=document.querySelectorAll('section[id]');
    const detailView=document.getElementById('service-detail-view');
    const journeyView=document.getElementById('journey-view');
    let current='';
    const pageId=getPageId();
    if(pageId!=='home'){
      current=pageId;
    } else if(detailView&&detailView.classList.contains('active')){
      current='offerings';
    } else if(journeyView&&journeyView.classList.contains('active')){
      current='about';
    } else if(sections.length){
      const vh=window.innerHeight*0.4;
      sections.forEach(s=>{
        const rect=s.getBoundingClientRect();
        if(rect.top<=vh&&rect.bottom>vh) current=s.id;
      });
      if(!current) current='home';
    } else {
      current='home';
    }
    navLinks.forEach(a=>{
      const id=getLinkId(a);
      a.classList.toggle('active',id===current);
    });
  }
  if(navbar){
    window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>60);updateActiveNav();},{passive:true});
    updateActiveNav();
  }
  const reveals=document.querySelectorAll('.reveal');
  const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){const siblings=entry.target.parentElement?entry.target.parentElement.querySelectorAll('.reveal'):[entry.target];let idx=Array.from(siblings).indexOf(entry.target);entry.target.style.transitionDelay=(idx%6)*.1+'s';entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.15});
  reveals.forEach(el=>observer.observe(el));
  document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const href=a.getAttribute('href');if(href==='#'||!href) return;const t=document.querySelector(href);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}})});

  var serviceDetailView=document.getElementById('service-detail-view');
  var serviceDetailBack=document.getElementById('service-detail-back');
  var serviceDetailTitle=document.getElementById('service-detail-title');
  var serviceDetailWhat=document.getElementById('service-detail-what');
  var serviceDetailIncludes=document.getElementById('service-detail-includes');
  var serviceDetailIncludesWrap=document.getElementById('service-detail-includes-wrap');
  var serviceDetailPrice=document.getElementById('service-detail-price');
  var serviceDetailBook=document.getElementById('service-detail-book');
  var serviceDetailImg=document.getElementById('service-detail-img');
  var serviceDetailImgSrc=document.getElementById('service-detail-img-src');

  var serviceDetails={
    offline:{ title:'Animal Telepathy — Offline', img:'assets/image5.png', whatIs:'Submit your questions and receive a detailed, written communication from your animal companion within 24–48 hours. Each session allows 6–8 separate questions with <strong>one question per line only</strong>. Responses are delivered via WhatsApp, Telegram, or voice notes. Follow-up sessions (approx 8 questions) are available at ₹800.', includes:['6–8 questions per session (one question per line)','Timeline: 24–48 hours','Delivered via WhatsApp, Telegram, or voice notes','Follow-up session: ₹800 (approx 8 questions)'], price:'₹1,500 per pet', bookId:'offline' },
    online:{ title:'Animal Telepathy — Online (call / Zoom)', img:'assets/image9.png', whatIs:'A real-time, deeply personal experience — connect live via call or Zoom for an open, unlimited conversation with your animals. This session covers approximately 2–3 pets, runs for 30 minutes, and allows unlimited questions during the call. No follow-up session.', includes:['Up to 2–3 pets per session','30 minutes live (call or Zoom)','Unlimited questions','No follow-up session'], price:'₹3,500 per session', bookId:'online' },
    aura_scan:{ title:'Aura Scan for Animals', img:'assets/image10.png', whatIs:'An Aura Scan is a gentle, intuitive way to explore your animal\'s emotional and energetic well-being. Through this compassionate process, we may sense areas of stress, imbalance, or sensitivity within your pet\'s energy field. The scan explores the auric field around your companion to support emotional and physical harmony.', includes:['Exploration of your pet\'s energy field','Identification of emotional & energetic imbalances','Up to 3 healing sessions included'], price:'₹1,000 for up to 3 healing sessions', bookId:'aura_scan' },
    chakra_healing:{ title:'Chakra Scan & Healing for Animals', img:'assets/image2.png', whatIs:'Chakra Scan and Healing is a gentle, spiritual practice that supports the emotional and energetic well-being of your beloved pets. All living beings have energy centers (chakras) that influence emotional wellbeing, physical health, behavior, stress levels, and connection with humans and the environment. Chakra healing helps restore balance, calm, and harmony, supporting overall wellness and deeper bonding. It can address trauma, anxiety, and energetic blocks.', includes:['Addresses trauma, anxiety, and energetic blocks','Supports calm, balance, and deeper bonding','Up to 3 healing sessions included'], price:'₹1,000 for up to 3 healing sessions', bookId:'chakra_healing' },
    white_light:{ title:'White Light Healing for Animals', img:'assets/image7.png', whatIs:'White Light Healing is a peaceful energy-based practice that supports the emotional and spiritual well-being of animals. By surrounding your companion with calming white light energy, this healing approach may help encourage relaxation, inner balance, and a sense of safety. It offers energy-based emotional and spiritual support and promotes relaxation and inner peace.', includes:['Energy-based emotional & spiritual support','Promotes relaxation and inner peace','Up to 3 healing sessions included'], price:'₹1,000 for up to 3 healing sessions', bookId:'white_light' },
    landscape:{ title:'Landscape Communication', img:'assets/image1.png', whatIs:'Landscape telepathy is the intuitive ability to communicate with the living world around us — with nature, places, ecosystems, and the wider universe. Through stillness, empathy, and inner listening, we sense the subtle messages carried by the Earth and the landscapes we call home. This is an invitation to remember that we are part of a deeply interconnected web of life, guided by the quiet whispers of the heart.', includes:['Connect with nature and place','Guided by the quiet whispers of the heart','Up to 3 sessions included'], price:'₹1,000 for up to 3 sessions', bookId:'landscape' }
  };

  function openServiceDetail(id){
    var s=serviceDetails[id];
    if(!s||!serviceDetailView) return;
    if(serviceDetailTitle) serviceDetailTitle.textContent=s.title;
    if(serviceDetailWhat) serviceDetailWhat.innerHTML='<h4>What is it?</h4><p>'+s.whatIs+'</p>';
    if(s.includes&&s.includes.length&&serviceDetailIncludesWrap&&serviceDetailIncludes){
      serviceDetailIncludesWrap.style.display='block';
      serviceDetailIncludes.innerHTML=s.includes.map(function(i){ return '<li>'+i+'</li>'; }).join('');
    } else if(serviceDetailIncludesWrap) serviceDetailIncludesWrap.style.display='none';
    if(serviceDetailPrice) serviceDetailPrice.textContent=s.price;
    if(s.img&&serviceDetailImgSrc){ serviceDetailImgSrc.src=s.img; serviceDetailImgSrc.alt=s.title; if(serviceDetailImg) serviceDetailImg.style.display='block'; } else if(serviceDetailImg) serviceDetailImg.style.display='none';
    if(serviceDetailBook) serviceDetailBook.setAttribute('data-book-id',s.bookId||id);
    serviceDetailView.classList.add('active');
    serviceDetailView.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    updateActiveNav();
  }

  function closeServiceDetail(){
    if(!serviceDetailView) return;
    serviceDetailView.classList.remove('active');
    serviceDetailView.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
    updateActiveNav();
  }

  if(serviceDetailView){
    document.querySelectorAll('.offering-card').forEach(function(card){
      card.addEventListener('click',function(e){ e.preventDefault(); var id=card.getAttribute('data-service-id'); if(id) openServiceDetail(id); });
    });
  }
  if(serviceDetailBack) serviceDetailBack.addEventListener('click',function(e){ e.preventDefault(); closeServiceDetail(); });
  if(serviceDetailBook) serviceDetailBook.addEventListener('click',function(){ var bookId=serviceDetailBook.getAttribute('data-book-id'); closeServiceDetail(); if(typeof window.openBooking==='function') window.openBooking(bookId); });

  var journeyView=document.getElementById('journey-view');
  var journeyBack=document.getElementById('journey-back');
  var openJourneyBtn=document.getElementById('open-journey-btn');
  var journeyConnectBtn=document.getElementById('journey-connect-btn');
  var journeySlides=document.querySelectorAll('#journey-view .journey-slide');
  var journeyPrev=document.getElementById('journey-prev');
  var journeyNext=document.getElementById('journey-next');
  var journeyStepEl=document.getElementById('journey-step');
  var journeyTotal=journeySlides.length;
  var currentJourneySlide=0;
  function showJourneySlide(idx){
    currentJourneySlide=Math.max(0,Math.min(idx,journeyTotal-1));
    journeySlides.forEach(function(s,i){ s.classList.toggle('active',i===currentJourneySlide); });
    if(journeyStepEl) journeyStepEl.textContent=(currentJourneySlide+1)+' of '+journeyTotal;
    if(journeyPrev) journeyPrev.disabled=currentJourneySlide===0;
    if(journeyNext) journeyNext.disabled=currentJourneySlide===journeyTotal-1;
  }
  function openJourneyView(){ if(!journeyView) return; currentJourneySlide=0; showJourneySlide(0); journeyView.classList.add('active'); journeyView.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; updateActiveNav(); }
  function closeJourneyView(){ if(!journeyView) return; journeyView.classList.remove('active'); journeyView.setAttribute('aria-hidden','true'); document.body.style.overflow=''; updateActiveNav(); }
  if(openJourneyBtn){ openJourneyBtn.addEventListener('click',function(e){ e.preventDefault(); openJourneyView(); }); }
  if(journeyBack){ journeyBack.addEventListener('click',function(e){ e.preventDefault(); closeJourneyView(); if(getPageId()!=='about') window.location.href='about.html'; }); }
  if(journeyPrev){ journeyPrev.addEventListener('click',function(){ showJourneySlide(currentJourneySlide-1); }); }
  if(journeyNext){ journeyNext.addEventListener('click',function(){ showJourneySlide(currentJourneySlide+1); }); }
  if(journeyView) journeyView.addEventListener('keydown',function(e){ if(!journeyView.classList.contains('active')) return; if(e.key==='ArrowLeft'){ showJourneySlide(currentJourneySlide-1); e.preventDefault(); } else if(e.key==='ArrowRight'){ showJourneySlide(currentJourneySlide+1); e.preventDefault(); } });
  if(journeyConnectBtn){ journeyConnectBtn.addEventListener('click',function(){ closeJourneyView(); if(typeof window.openBooking==='function') window.openBooking(); }); }

  var overlay=document.getElementById('booking-overlay');
  var form=document.getElementById('booking-form');
  var formAction=form&&form.getAttribute('action');
  var steps=document.querySelectorAll('.booking-step');
  var openBtn=document.getElementById('open-booking-btn');
  var closeBtn=document.getElementById('booking-close');
  var doneCloseBtn=document.getElementById('booking-done-close');
  var offeringsSelect=document.getElementById('offerings-select');

  var offeringValues={ offline:'Animal Telepathy — Offline (₹1,500 per pet)', online:'Animal Telepathy — Online (₹3,500)', aura_scan:'Aura Scan for Animals (₹1,000)', chakra_healing:'Chakra Scan & Healing (₹1,000)', white_light:'White Light Healing (₹1,000)', landscape:'Landscape Communication (₹1,000)' };

  function goToStep(stepId){
    if(!steps.length) return;
    steps.forEach(function(s){ s.classList.toggle('active', s.getAttribute('data-step')===stepId); });
  }

  function openBooking(preselect){
    if(!overlay) return;
    if(form) form.reset();
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
    goToStep('form');
    if(preselect&&offeringsSelect&&offeringValues[preselect]){
      offeringsSelect.value=offeringValues[preselect];
    }
  }

  function closeBooking(){
    if(!overlay) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }

  window.openBooking=openBooking;

  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(!formAction||formAction.indexOf('YOUR_FORM_ID')!==-1){ alert('Form is not configured. Please set your Formspree form ID in the form action (see SETUP.md).'); return; }
      var submitBtn=document.getElementById('booking-submit');
      if(submitBtn){ submitBtn.disabled=true; submitBtn.textContent='Sending…'; }
      var fd=new FormData(form);
      fetch(formAction,{ method:'POST', body: fd, headers:{ 'Accept':'application/json' } })
        .then(function(r){ return r.json(); })
        .then(function(){ goToStep('done'); })
        .catch(function(){ alert('Something went wrong. Please try again or contact us directly.'); })
        .finally(function(){ if(submitBtn){ submitBtn.disabled=false; submitBtn.textContent='Send to Bridge of Whispers'; } });
    });
  }

  if(openBtn) openBtn.addEventListener('click',function(){ openBooking(); });
  var navConnect=document.getElementById('nav-connect');
  if(navConnect) navConnect.addEventListener('click',function(e){ e.preventDefault(); openBooking(); });
  var heroBookBtn=document.getElementById('hero-book-btn');
  if(heroBookBtn) heroBookBtn.addEventListener('click',function(){ openBooking(); });
  if(closeBtn) closeBtn.addEventListener('click', closeBooking);
  if(doneCloseBtn) doneCloseBtn.addEventListener('click', closeBooking);
  if(overlay) overlay.addEventListener('click',function(e){ if(e.target===overlay) closeBooking(); });

  document.querySelectorAll('.btn-book-service').forEach(function(btn){
    btn.addEventListener('click',function(){
      var type=btn.getAttribute('data-type');
      var service=btn.getAttribute('data-service');
      openBooking(type||service);
    });
  });
})();
