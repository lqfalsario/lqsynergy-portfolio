/* LQ Synergy > Notion: anonymous event counts, no visitor messages or identifiers. */
(function(){
  'use strict';
  var API='https://lqsynergy-notion-bridge.vercel.app/api/track';
  var accepted={page_view:1,chat_open:1,chat_question:1,whatsapp_handoff_click:1,booking_link_click:1,contact_link_click:1};
  function source(){
    try {
      var ref=new URL(document.referrer);
      if(ref.hostname===location.hostname)return 'internal';
      return ref.hostname.replace(/[^a-z0-9.-]/gi,'').slice(0,60);
    }catch(e){return 'direct';}
  }
  function send(type,params){
    if(!accepted[type] || navigator.globalPrivacyControl===true || navigator.doNotTrack==='1')return;
    var body={type:type,page:location.origin+location.pathname,source:source()};
    if(type==='contact_link_click' && params && params.method==='whatsapp')body.method='whatsapp';
    try{
      fetch(API,{method:'POST',mode:'cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),keepalive:true,credentials:'omit'}).catch(function(){});
    }catch(e){}
  }
  window.lqNotionTrack=send;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){send('page_view');},{once:true});else send('page_view');
})();