/* LQ Synergy portfolio assistant: local-time greetings, localized FAQ, safe clickable links. */
(function initLQAssistant(){
  'use strict';
  var URLS = {
    services:'https://lqfalsario.github.io/lqsynergy-portfolio/#services',
    work:'https://lqfalsario.github.io/lqsynergy-portfolio/#work',
    availability:'https://lqfalsario.github.io/lqsynergy-portfolio/#availability',
    report:'https://lqfalsario.github.io/lqsynergy-portfolio/email-campaign-performance-sample.html',
    resume:'https://docs.google.com/document/d/1n-ZZVjRnowJSUbzqi5QXJMcz27RSLzr9buOiKVQCews/edit',
    booking:'https://calendly.com/lqfalsario/strategy-session',
    whatsapp:'https://wa.me/639959763871',
    email:'lqfalsario@gmail.com'
  };
  var locales = {
    en:{
      times:['Good morning','Good afternoon','Good evening'],
      intro:"I'm the LQ Synergy portfolio assistant. I can help you explore Lawrence's services, work samples, availability and booking options. What would you like to know?",
      nudge:'Need help exploring this portfolio? Ask me!',
      sub:'Portfolio information & booking help',ask:'Ask LQ Synergy',placeholder:'Ask about services, availability...',send:'Send',whatsapp:'Chat with Lawrence on WhatsApp',
      chips:['Services','Work samples','Availability','Book a call'],
      questions:['What services do you offer?','Show me your work samples','What is your availability?','How can I book a meeting?'],
      foot:"Automated FAQ. Your questions aren't sent to Lawrence; for a personal reply, use WhatsApp. Anonymous interaction counts may be recorded.",
      answers:{
        person:'To speak with Lawrence personally, send him a WhatsApp message:',
        booking:'Book a strategy session here:',
        availability:'Lawrence offers flexible full shifts on Monday, Tuesday, Thursday and Friday. Other days are tentative. See the current schedule:',
        work:'Explore selected lead generation and email marketing work:',
        report:'Email campaign performance sample:',
        resume:"View Lawrence's résumé:",
        contact:'Email Lawrence or message him on WhatsApp:',
        services:'LQ Synergy supports B2B/B2C lead generation, prospect research, verified databases, LinkedIn outreach, email marketing, segmentation, reporting and CRM organization. More details:',
        hello:'Hello! Ask me about services, portfolio projects, experience, availability or booking.',
        fallback:"I can answer questions about services, work samples, experience, availability and bookings. For something else, please contact Lawrence:"
      }
    },
    tl:{
      times:['Magandang umaga','Magandang hapon','Magandang gabi'],
      intro:'Ako ang virtual assistant ng LQ Synergy. Matutulungan kitang malaman ang mga serbisyo, sample ng trabaho, availability at booking ni Lawrence. Ano ang maitutulong ko?',
      nudge:'May tanong tungkol sa portfolio? Magtanong lang!',
      sub:'Impormasyon sa portfolio at booking',ask:'Magtanong sa LQ Synergy',placeholder:'Magtanong tungkol sa serbisyo...',send:'Ipadala',whatsapp:'I-chat si Lawrence sa WhatsApp',
      chips:['Mga serbisyo','Mga sample','Availability','Mag-book ng call'],
      questions:['Ano ang mga serbisyo mo?','Pakita ng mga sample ng trabaho','Ano ang availability mo?','Paano mag-book ng meeting?'],
      foot:'Automated FAQ ito. Hindi ipinapadala kay Lawrence ang mga tanong mo rito. Para sa personal na sagot, gamitin ang WhatsApp. Maaaring itala ang anonymous na bilang ng interactions.',
      answers:{
        person:'Para direktang makausap si Lawrence, magpadala ng mensahe sa WhatsApp:',
        booking:'Maaari kang mag-book ng strategy session dito:',
        availability:'Flexible ang full shifts ni Lawrence tuwing Lunes, Martes, Huwebes at Biyernes. Tentative ang ibang araw. Tingnan ang kasalukuyang iskedyul:',
        work:'Tingnan ang mga sample ng lead generation at email marketing:',
        report:'Sample na ulat ng email campaign:',
        resume:'Tingnan ang résumé ni Lawrence:',
        contact:'Mag-email kay Lawrence o mag-message sa WhatsApp:',
        services:'Kabilang sa mga serbisyo ang B2B/B2C lead generation, prospect research, verified lead lists, LinkedIn outreach, email marketing, segmentation, reporting at CRM support. Detalye:',
        hello:'Kumusta! Maaari kang magtanong tungkol sa mga serbisyo, sample, karanasan, availability o booking.',
        fallback:'Makakasagot ako ng karaniwang tanong tungkol sa serbisyo, mga sample, availability at booking. Para sa ibang tanong, kontakin si Lawrence:'
      }
    },
    es:{
      times:['Buenos días','Buenas tardes','Buenas noches'],
      intro:'Soy el asistente virtual de LQ Synergy. Puedo ayudarte con los servicios, proyectos, disponibilidad y reservas de Lawrence. ¿Qué te gustaría saber?',
      nudge:'¿Tienes preguntas sobre el portafolio? ¡Pregúntame!',
      sub:'Portafolio y ayuda para reservar',ask:'Pregunta a LQ Synergy',placeholder:'Pregunta por servicios, horarios...',send:'Enviar',whatsapp:'Hablar con Lawrence por WhatsApp',
      chips:['Servicios','Proyectos','Disponibilidad','Reservar llamada'],
      questions:['¿Qué servicios ofreces?','Muéstrame tus proyectos','¿Cuál es tu disponibilidad?','¿Cómo puedo reservar una reunión?'],
      foot:'Preguntas frecuentes automatizadas. Tus mensajes aquí no se envían a Lawrence; usa WhatsApp para una respuesta personal. Se pueden registrar recuentos anónimos de interacciones.',
      answers:{
        person:'Para hablar directamente con Lawrence, envíale un mensaje por WhatsApp:',
        booking:'Reserva una sesión de estrategia aquí:',
        availability:'Lawrence tiene turnos completos flexibles los lunes, martes, jueves y viernes. Los demás días son tentativos. Consulta el horario:',
        work:'Explora proyectos de generación de leads y email marketing:',
        report:'Ejemplo de informe de campañas por correo:',
        resume:'Consulta el currículum de Lawrence:',
        contact:'Escríbele a Lawrence por correo o WhatsApp:',
        services:'LQ Synergy ofrece generación de leads B2B/B2C, investigación de clientes, bases de datos verificadas, LinkedIn outreach, email marketing, segmentación, informes y soporte CRM. Más información:',
        hello:'¡Hola! Pregúntame sobre servicios, proyectos, experiencia, disponibilidad o reservas.',
        fallback:'Puedo responder preguntas habituales sobre servicios, proyectos, disponibilidad y reservas. Para otras consultas, contacta a Lawrence:'
      }
    },
    fr:{
      times:['Bonjour','Bon après-midi','Bonsoir'],
      intro:"Je suis l'assistant virtuel de LQ Synergy. Je peux vous renseigner sur les services, les réalisations, les disponibilités et les rendez-vous de Lawrence. Que souhaitez-vous savoir ?",
      nudge:'Une question sur ce portfolio ? Je peux vous aider !',
      sub:'Portfolio et prise de rendez-vous',ask:'Contacter LQ Synergy',placeholder:'Services, disponibilités...',send:'Envoyer',whatsapp:'Contacter Lawrence sur WhatsApp',
      chips:['Services','Réalisations','Disponibilités','Prendre rendez-vous'],
      questions:['Quels services proposez-vous ?','Montrez-moi des réalisations','Quelles sont vos disponibilités ?','Comment prendre rendez-vous ?'],
      foot:"FAQ automatisée. Vos questions ici ne sont pas transmises à Lawrence ; utilisez WhatsApp pour une réponse personnelle. Des statistiques anonymes d'interaction peuvent être enregistrées.",
      answers:{
        person:'Pour parler directement à Lawrence, envoyez-lui un message WhatsApp :',
        booking:'Réservez une session stratégique ici :',
        availability:'Lawrence propose des journées de travail flexibles les lundis, mardis, jeudis et vendredis. Les autres jours sont à confirmer. Consultez les horaires :',
        work:'Découvrez ses réalisations en prospection et marketing par e-mail :',
        report:"Exemple de rapport de campagne e-mail :",
        resume:'Consultez le CV de Lawrence :',
        contact:'Contactez Lawrence par e-mail ou WhatsApp :',
        services:"LQ Synergy propose la génération de prospects B2B/B2C, la recherche, la vérification des contacts, la prospection LinkedIn, le marketing par e-mail, la segmentation, les rapports et l'organisation CRM. Détails :",
        hello:'Bonjour ! Posez vos questions sur les services, réalisations, disponibilités ou rendez-vous.',
        fallback:"Je peux répondre aux questions courantes sur les services, réalisations, disponibilités et rendez-vous. Pour autre chose, contactez Lawrence :"
      }
    },
    de:{
      times:['Guten Morgen','Guten Tag','Guten Abend'],
      intro:'Ich bin der virtuelle Assistent von LQ Synergy. Ich helfe Ihnen bei Fragen zu Dienstleistungen, Arbeitsproben, Verfügbarkeit und Terminen mit Lawrence. Wie kann ich helfen?',
      nudge:'Fragen zum Portfolio? Ich helfe gern!',
      sub:'Portfolio-Infos und Terminbuchung',ask:'LQ Synergy fragen',placeholder:'Frage zu Services oder Terminen...',send:'Senden',whatsapp:'Lawrence auf WhatsApp kontaktieren',
      chips:['Dienstleistungen','Arbeitsproben','Verfügbarkeit','Termin buchen'],
      questions:['Welche Dienstleistungen bieten Sie an?','Zeigen Sie Arbeitsproben','Wie ist Ihre Verfügbarkeit?','Wie kann ich einen Termin buchen?'],
      foot:'Automatisierte FAQ. Diese Fragen werden nicht an Lawrence weitergeleitet. Für eine persönliche Antwort nutzen Sie WhatsApp. Anonyme Interaktionszahlen können erfasst werden.',
      answers:{
        person:'Um direkt mit Lawrence zu sprechen, schreiben Sie ihm auf WhatsApp:',
        booking:'Buchen Sie hier ein Strategiegespräch:',
        availability:'Lawrence bietet flexible volle Arbeitstage montags, dienstags, donnerstags und freitags an. Weitere Tage sind vorläufig. Aktueller Zeitplan:',
        work:'Sehen Sie Arbeitsproben für Lead-Generierung und E-Mail-Marketing:',
        report:'Beispiel eines E-Mail-Kampagnenberichts:',
        resume:'Lebenslauf von Lawrence ansehen:',
        contact:'Kontaktieren Sie Lawrence per E-Mail oder WhatsApp:',
        services:'LQ Synergy unterstützt B2B/B2C-Leadgenerierung, Recherche, geprüfte Kontaktdaten, LinkedIn-Outreach, E-Mail-Marketing, Segmentierung, Reporting und CRM-Organisation. Details:',
        hello:'Hallo! Fragen Sie nach Dienstleistungen, Arbeitsproben, Erfahrung, Verfügbarkeit oder Terminen.',
        fallback:'Ich beantworte häufige Fragen zu Leistungen, Arbeitsproben, Verfügbarkeit und Terminen. Für andere Fragen kontaktieren Sie Lawrence:'
      }
    },
    pt:{
      times:['Bom dia','Boa tarde','Boa noite'],
      intro:'Sou o assistente virtual da LQ Synergy. Posso ajudar com serviços, portfólio, disponibilidade e agendamentos de Lawrence. O que gostaria de saber?',
      nudge:'Dúvidas sobre o portfólio? Posso ajudar!',
      sub:'Portfólio e agendamentos',ask:'Pergunte à LQ Synergy',placeholder:'Pergunte sobre serviços ou horários...',send:'Enviar',whatsapp:'Fale com Lawrence pelo WhatsApp',
      chips:['Serviços','Projetos','Disponibilidade','Agendar chamada'],
      questions:['Quais serviços você oferece?','Mostre seus projetos','Qual é sua disponibilidade?','Como agendar uma reunião?'],
      foot:'FAQ automatizado. As perguntas não são enviadas a Lawrence; para uma resposta pessoal, use o WhatsApp. Contagens anônimas de interações podem ser registradas.',
      answers:{
        person:'Para falar diretamente com Lawrence, envie uma mensagem no WhatsApp:',
        booking:'Agende uma sessão de estratégia aqui:',
        availability:'Lawrence oferece turnos completos flexíveis às segundas, terças, quintas e sextas. Os demais dias são provisórios. Veja os horários:',
        work:'Veja projetos de geração de leads e email marketing:',
        report:'Exemplo de relatório de campanha de e-mail:',
        resume:'Veja o currículo de Lawrence:',
        contact:'Envie um e-mail ou mensagem no WhatsApp para Lawrence:',
        services:'A LQ Synergy oferece geração de leads B2B/B2C, pesquisa de prospects, bases verificadas, abordagem no LinkedIn, email marketing, segmentação, relatórios e CRM. Detalhes:',
        hello:'Olá! Pergunte sobre serviços, projetos, experiência, disponibilidade ou agendamento.',
        fallback:'Posso responder perguntas comuns sobre serviços, projetos, disponibilidade e agendamentos. Para outros assuntos, contate Lawrence:'
      }
    },
    id:{
      times:['Selamat pagi','Selamat siang','Selamat malam'],
      intro:'Saya asisten virtual LQ Synergy. Saya bisa membantu Anda mengetahui layanan, contoh pekerjaan, ketersediaan, dan pemesanan jadwal Lawrence. Ada yang ingin ditanyakan?',
      nudge:'Punya pertanyaan tentang portofolio ini? Tanya saya!',
      sub:'Info portofolio dan jadwal',ask:'Tanya LQ Synergy',placeholder:'Tanya tentang layanan atau jadwal...',send:'Kirim',whatsapp:'Hubungi Lawrence lewat WhatsApp',
      chips:['Layanan','Contoh karya','Ketersediaan','Pesan panggilan'],
      questions:['Layanan apa yang tersedia?','Tunjukkan contoh pekerjaan','Bagaimana jadwal ketersediaan Anda?','Bagaimana cara memesan pertemuan?'],
      foot:'FAQ otomatis. Pertanyaan tidak dikirim ke Lawrence; gunakan WhatsApp untuk balasan langsung. Jumlah interaksi anonim mungkin dicatat.',
      answers:{
        person:'Untuk berbicara langsung dengan Lawrence, kirim pesan WhatsApp:',
        booking:'Jadwalkan sesi strategi di sini:',
        availability:'Lawrence tersedia fleksibel untuk sif penuh Senin, Selasa, Kamis, dan Jumat. Hari lainnya masih tentatif. Lihat jadwal:',
        work:'Lihat contoh pekerjaan lead generation dan email marketing:',
        report:'Contoh laporan performa kampanye email:',
        resume:'Lihat résumé Lawrence:',
        contact:'Hubungi Lawrence melalui email atau WhatsApp:',
        services:'LQ Synergy menangani lead generation B2B/B2C, riset prospek, database terverifikasi, penjangkauan LinkedIn, email marketing, segmentasi, pelaporan, dan CRM. Detail:',
        hello:'Halo! Tanyakan tentang layanan, portofolio, pengalaman, ketersediaan, atau jadwal.',
        fallback:'Saya dapat menjawab pertanyaan umum tentang layanan, karya, ketersediaan, dan jadwal. Untuk hal lainnya, hubungi Lawrence:'
      }
    },
    ja:{
      times:['おはようございます','こんにちは','こんばんは'],
      intro:'LQ Synergyのポートフォリオ案内アシスタントです。Lawrenceのサービス、実績、対応可能な時間、面談予約についてご案内します。何をお探しですか？',
      nudge:'ポートフォリオについてご質問はありますか？',
      sub:'実績・サービス・面談予約のご案内',ask:'LQ Synergyに質問',placeholder:'サービスや面談予約について質問...',send:'送信',whatsapp:'WhatsAppでLawrenceに連絡',
      chips:['サービス','実績','対応時間','面談を予約'],
      questions:['提供するサービスは？','実績を見せてください','対応可能な時間は？','面談を予約するには？'],
      foot:'自動FAQです。入力した質問はLawrence本人には送られません。直接の連絡はWhatsAppをご利用ください。匿名の操作回数を記録する場合があります。',
      answers:{
        person:'Lawrence本人とのやり取りはWhatsAppからどうぞ：',
        booking:'戦略相談はこちらから予約できます：',
        availability:'Lawrenceは月・火・木・金曜に柔軟なフルシフトで対応可能です。その他の曜日は暫定です。最新の日程：',
        work:'リード獲得・メールマーケティングの実績をご覧ください：',
        report:'メールキャンペーンのレポート例：',
        resume:'Lawrenceの履歴書はこちら：',
        contact:'メールまたはWhatsAppでLawrenceに連絡できます：',
        services:'B2B/B2Cリード獲得、見込み客調査、連絡先データベースの確認、LinkedInでのアプローチ、メールマーケティング、セグメント分け、レポート作成、CRM管理を支援します。詳細：',
        hello:'こんにちは！サービス、実績、経験、対応時間、面談予約についてお答えします。',
        fallback:'サービス、実績、対応時間、面談予約などの基本的な質問に対応できます。その他のご相談はLawrenceに直接ご連絡ください：'
      }
    },
    zh:{
      times:['早上好','下午好','晚上好'],
      intro:'我是LQ Synergy作品集助手，可以介绍Lawrence的服务、项目案例、工作时间和预约方式。有什么可以帮您？',
      nudge:'对作品集有疑问吗？欢迎提问！',
      sub:'作品集介绍与预约帮助',ask:'咨询LQ Synergy',placeholder:'询问服务、工作时间或预约...',send:'发送',whatsapp:'通过WhatsApp联系Lawrence',
      chips:['服务','项目案例','工作时间','预约通话'],
      questions:['提供哪些服务？','查看项目案例','什么时候有空？','如何预约会议？'],
      foot:'此处为自动常见问题解答。问题不会转发给Lawrence本人；如需直接回复，请使用WhatsApp。网站可能记录匿名交互次数。',
      answers:{
        person:'如需直接与Lawrence交流，请通过WhatsApp联系：',
        booking:'您可以在此预约策略沟通：',
        availability:'Lawrence通常在周一、周二、周四和周五提供灵活的全日工作时间，其他日期待确认。最新安排：',
        work:'查看潜在客户开发与电子邮件营销案例：',
        report:'邮件营销活动报告示例：',
        resume:'查看Lawrence的简历：',
        contact:'可通过电子邮件或WhatsApp联系Lawrence：',
        services:'LQ Synergy提供B2B/B2C客户开发、潜在客户研究、联系人数据库核实、LinkedIn拓展、邮件营销、客户分组、报告及CRM管理支持。详情：',
        hello:'您好！我可以介绍服务、案例、经验、工作时间及会议预约。',
        fallback:'我可以回答关于服务、案例、工作时间和预约的常见问题。其他事项请直接联系Lawrence：'
      }
    },
    ar:{
      times:['صباح الخير','مساء الخير','مساء الخير'],
      intro:'أنا المساعد الافتراضي لـ LQ Synergy. يمكنني مساعدتك في معرفة خدمات لورانس وأعماله ومواعيد توافره وحجز الاجتماعات. كيف يمكنني مساعدتك؟',
      nudge:'هل لديك سؤال عن معرض الأعمال؟ اسألني!',
      sub:'معلومات الأعمال وحجز المواعيد',ask:'اسأل LQ Synergy',placeholder:'اسأل عن الخدمات أو المواعيد...',send:'إرسال',whatsapp:'تحدث مع لورانس عبر واتساب',
      chips:['الخدمات','نماذج الأعمال','التوافر','حجز مكالمة'],
      questions:['ما الخدمات التي تقدمها؟','أرني نماذج الأعمال','ما أوقات توافرك؟','كيف أحجز اجتماعاً؟'],
      foot:'هذه إجابات تلقائية للأسئلة الشائعة. لا يتم إرسال أسئلتك إلى لورانس. للحصول على رد شخصي، استخدم واتساب. قد تُسجل أعداد تفاعلات مجهولة.',
      answers:{
        person:'للتحدث مباشرة مع لورانس، أرسل له رسالة عبر واتساب:',
        booking:'احجز جلسة استراتيجية هنا:',
        availability:'يعمل لورانس بمرونة بدوام كامل أيام الاثنين والثلاثاء والخميس والجمعة، وبقية الأيام غير مؤكدة. راجع الجدول الحالي:',
        work:'تصفح نماذج أعمال توليد العملاء المحتملين والتسويق بالبريد الإلكتروني:',
        report:'مثال لتقرير أداء حملة بريد إلكتروني:',
        resume:'اطلع على السيرة الذاتية للورانس:',
        contact:'راسل لورانس بالبريد الإلكتروني أو واتساب:',
        services:'تشمل الخدمات توليد العملاء المحتملين للشركات والأفراد، والبحث عن العملاء، والتحقق من قواعد البيانات، والتواصل عبر LinkedIn، والتسويق بالبريد الإلكتروني، والتقسيم وإعداد التقارير وإدارة CRM. التفاصيل:',
        hello:'مرحباً! اسأل عن الخدمات ونماذج الأعمال والخبرة والأوقات والحجز.',
        fallback:'يمكنني الإجابة عن الأسئلة الشائعة حول الخدمات ونماذج الأعمال والتوافر والحجز. لأسئلة أخرى، تواصل مع لورانس:'
      }
    }
  };
  var toggle=document.getElementById('lq-chat-toggle');
  var panel=document.getElementById('lq-chat-panel');
  var close=document.getElementById('lq-chat-close');
  var input=document.getElementById('lq-chat-input');
  var form=document.getElementById('lq-chat-form');
  var messages=document.getElementById('lq-chat-messages');
  var langSelect=document.getElementById('lq-chat-language');
  var nudge=document.getElementById('lq-chat-nudge');
  var nudgeText=document.getElementById('lq-chat-nudge-text');
  var subtitle=document.getElementById('lq-chat-subtitle');
  var welcome=document.getElementById('lq-chat-welcome');
  var whatsappText=document.getElementById('lq-chat-whatsapp-text');
  var footer=document.getElementById('lq-chat-footer');
  if(!toggle||!panel||!close||!input||!form||!messages||!langSelect)return;
  function track(name,params){
    if(typeof window.gtag==='function')window.gtag('event',name,params||{});
    if(typeof window.lqNotionTrack==='function')window.lqNotionTrack(name,params||{});
  }
  function normalizedLang(value){
    var code=String(value||'').toLowerCase().split(/[-_]/)[0];
    if(code==='fil')code='tl';
    return Object.prototype.hasOwnProperty.call(locales,code)?code:null;
  }
  function browserLang(){
    var list=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en']);
    return normalizedLang(list[0])||'en';
  }
  var language=browserLang();
  var welcomeSeen=false;
  try{welcomeSeen=sessionStorage.getItem('lqChatWelcomeSeenV2')==='yes';}catch(e){}
  function markSeen(){welcomeSeen=true;try{sessionStorage.setItem('lqChatWelcomeSeenV2','yes');}catch(e){}}
  function sayTime(){
    // JavaScript Date#getHours uses the visitor's device timezone, not the owner's timezone.
    var h=new Date().getHours();
    return locales[language].times[h>=5&&h<12?0:h>=12&&h<18?1:2];
  }
  function updateUI(){
    var l=locales[language];
    var greeting=sayTime();
    panel.lang=language;
    panel.dir=language==='ar'?'rtl':'ltr';
    if(nudge)nudge.dir=panel.dir;
    if(welcome)welcome.textContent=greeting+'! 👋 '+l.intro;
    if(nudgeText)nudgeText.textContent=greeting+'! 👋 '+l.nudge;
    if(subtitle)subtitle.textContent=l.sub;
    if(whatsappText)whatsappText.textContent=l.whatsapp;
    if(footer)footer.textContent=l.foot;
    toggle.textContent='✦ '+l.ask;
    input.placeholder=l.placeholder;
    input.setAttribute('aria-label',l.placeholder);
    var submit=form.querySelector('button[type=submit]');if(submit)submit.textContent=l.send;
    document.querySelectorAll('#lq-chat-chips button').forEach(function(b,i){
      b.textContent=l.chips[i];
      b.dataset.q=l.questions[i];
      b.dataset.intent=['services','work','availability','booking'][i];
    });
  }
  function hideNudge(){
    if(nudge)nudge.hidden=true;
    markSeen();
  }
  function show(open){
    panel.hidden=!open;
    toggle.setAttribute('aria-expanded',String(open));
    if(open){hideNudge();track('chat_open');input.focus();}else{toggle.focus();}
  }
  toggle.addEventListener('click',function(){show(panel.hidden);});
  close.addEventListener('click',function(){show(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)show(false);});
  document.getElementById('lq-chat-nudge-open')?.addEventListener('click',function(){show(true);});
  document.getElementById('lq-chat-nudge-dismiss')?.addEventListener('click',hideNudge);
  langSelect.addEventListener('change',function(){
    language=langSelect.value==='auto'?browserLang():(normalizedLang(langSelect.value)||'en');
    updateUI();
  });
  function detectMessageLanguage(text){
    if(/[\u3040-\u30ff]/.test(text))return 'ja';
    if(/[\u0600-\u06ff]/.test(text))return 'ar';
    if(/[\u3400-\u9fff]/.test(text))return 'zh';
    if(/\b(kumusta|magandang|paano|salamat|pwede|maaari|serbisyo|trabaho|kailan|available ba|oras mo)\b/i.test(text))return 'tl';
    if(/\b(hola|gracias|quiero|cu[aá]ndo|c[oó]mo|muestras|disponibilidad|reuni[oó]n|cita)\b/i.test(text))return 'es';
    if(/\b(bonjour|merci|rendez-vous|disponibilit[eé]|r[eé]alisations|montrer|comment faire)\b/i.test(text))return 'fr';
    if(/\b(ol[aá]|obrigad[oa]|agendar|disponibilidade|trabalhos|voc[eê]|hor[aá]rios)\b/i.test(text))return 'pt';
    if(/\b(hallo|guten|danke|termin|verf[uü]gbarkeit|arbeitsproben|dienstleistungen)\b/i.test(text))return 'de';
    if(/\b(halo|terima kasih|bagaimana|layanan|pekerjaan|jadwal|ketersediaan)\b/i.test(text))return 'id';
    return null;
  }
  function detectIntent(q){
    var s=q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    if(/whats\s?app|real person|human|live agent|talk to lawrence|speak with lawrence|personal reply|kausap|tao|hablar.*lawrence|persona real|parler.*lawrence|sprechen.*lawrence|falar.*lawrence|本人|人との|人工|真人|联系本人|شخص|تحدث|berbicara langsung/.test(s))return 'person';
    if(/\b(book|booking|call|meeting|calendar|calendly|schedule|appointment|reserve|appointment setting|agendar|reservar|reunion|cita|llamada|rendez-vous|reserver|termin|buchen|agendamento|reuniao|mag-book|meeting|pesan|janji|sesi)\b|予約|面談|会议|预约|حجز|موعد|مكالمة/.test(s))return 'booking';
    if(/\b(available|availability|hours|time zone|timezone|schedule|shift|disponibilidad|horario|disponibilite|disponibilites|verfugbarkeit|verfugbar|arbeitszeit|disponibilidade|horarios|kailan|oras|sif|jadwal|ketersediaan)\b|対応時間|空き|工作时间|时间安排|التوافر|مواعيد|أوقات/.test(s))return 'availability';
    if(/\b(resume|résumé|curriculum|curriculo|cv|experience|background|experience|lebenslauf|履歴書|简历|السيرة الذاتية|karanasan|karier|erfahrung)\b|履歴|履历|経歴/.test(s))return 'resume';
    if(/\b(sample|samples|portfolio|work|projects|case stud|report|campaign|project|muestra|muestras|trabajo|proyecto|portafolio|realisation|realisation|realisations|projets|arbeitsprobe|arbeiten|projekte|trabalhos|projetos|portofolio|contoh|pekerjaan|trabaho|sample)\b|実績|作品|仕事|案例|项目|作品集|نماذج|الأعمال|مشاريع/.test(s))return 'work';
    if(/\b(service|services|offer|lead|marketing|outreach|crm|research|servicio|servicios|servico|servicos|dienstleistungen|angebote|leistungen|serbisyo|layanan|leistung|marketing|prospect)\b|サービス|服务|服务项目|الخدمات|خدمات/.test(s))return 'services';
    if(/\b(contact|email|e-mail|reach|message|mensaje|correo|contacto|contactez|kontakt|contato|mensagem|makipag|hubungi|e mail)\b|メール|联系|聯絡|تواصل|بريد/.test(s))return 'contact';
    if(/^(hi|hello|hey|good morning|good evening|kumusta|hola|bonjour|hallo|ola|halo|こんにちは|你好|مرحبا|السلام عليكم)([!?.\s]|$)/.test(s))return 'hello';
    return 'fallback';
  }
  function response(intent){
    var a=locales[language].answers;
    if(intent==='person')return a.person+'\n'+URLS.whatsapp;
    if(intent==='booking')return a.booking+'\n'+URLS.booking;
    if(intent==='availability')return a.availability+'\n'+URLS.availability;
    if(intent==='work')return a.work+'\n'+URLS.work+'\n'+a.report+'\n'+URLS.report;
    if(intent==='resume')return a.resume+'\n'+URLS.resume;
    if(intent==='contact')return a.contact+'\n'+URLS.email+'\n'+URLS.whatsapp;
    if(intent==='services')return a.services+'\n'+URLS.services;
    if(intent==='hello')return a.hello;
    return a.fallback+'\n'+URLS.email;
  }
  // Never put visitor content into innerHTML. Construct links from safe text nodes.
  function addLinkedText(element,text){
    var pattern=/(https?:\/\/[^\s<>"']+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;
    var last=0,match;
    while((match=pattern.exec(text))!==null){
      element.appendChild(document.createTextNode(text.slice(last,match.index)));
      var raw=match[0],clean=raw.replace(/[.,!?;:)\]]+$/,'');
      var extra=raw.slice(clean.length);
      if(clean){
        var a=document.createElement('a');
        a.href=clean.indexOf('http')===0?clean:'mailto:'+clean;
        a.textContent=clean;
        a.dir='ltr';
        if(clean.indexOf('http')===0){
          if(new URL(clean).origin!==location.origin){a.target='_blank';a.rel='noopener noreferrer';}
        }
        element.appendChild(a);
      }
      if(extra)element.appendChild(document.createTextNode(extra));
      last=pattern.lastIndex;
    }
    element.appendChild(document.createTextNode(text.slice(last)));
  }
  function add(text,kind){
    var el=document.createElement('div');
    el.className='lq-chat-message '+kind;
    if(kind==='bot')addLinkedText(el,text);
    else el.textContent=text;
    messages.appendChild(el);
    messages.scrollTop=messages.scrollHeight;
  }
  function send(q,forcedIntent){
    q=String(q||'').trim();
    if(!q)return;
    if(langSelect.value==='auto'){
      var detected=detectMessageLanguage(q);
      if(detected&&detected!==language){language=detected;updateUI();}
    }
    var intent=forcedIntent||detectIntent(q);
    add(q,'user');
    add(response(intent),'bot');
    track('chat_question',{category:intent==='booking'?'booking':intent==='services'?'services':'general'});
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();send(input.value);input.value='';input.focus();
  });
  document.querySelectorAll('#lq-chat-chips button').forEach(function(b){
    b.addEventListener('click',function(){send(b.dataset.q,b.dataset.intent);});
  });
  document.getElementById('lq-chat-whatsapp')?.addEventListener('click',function(){track('whatsapp_handoff_click');});
  document.querySelectorAll('a[href*="calendly.com/lqfalsario/"]').forEach(function(a){
    a.addEventListener('click',function(){track('booking_link_click');});
  });
  document.querySelectorAll('a[href^="mailto:"],a[href*="wa.me/"]').forEach(function(a){
    a.addEventListener('click',function(){track('contact_link_click',{method:a.href.startsWith('mailto:')?'email':'whatsapp'});});
  });
  // Newly created links inside bot messages need delegated tracking.
  messages.addEventListener('click',function(event){
    var a=event.target.closest('a[href]');
    if(!a)return;
    if(a.href.indexOf('calendly.com/lqfalsario/')>=0)track('booking_link_click');
    else if(a.href.indexOf('wa.me/')>=0){track('whatsapp_handoff_click');track('contact_link_click',{method:'whatsapp'});}
    else if(a.href.startsWith('mailto:'))track('contact_link_click',{method:'email'});
  });
  updateUI();
  if(nudge&&!welcomeSeen){
    window.setTimeout(function(){if(panel.hidden&&!welcomeSeen)nudge.hidden=false;},1600);
  }
})();