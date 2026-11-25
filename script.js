const projects={
  'start-right':{title:'Start Right',copy:'A comprehensive one-stop platform for startup needs, combining responsive product design with live communication and personalized discovery.',flow:'REACT UI → NODE + EXPRESS → MONGODB → WEBSOCKET + NLP',result:'Built real-time text and video communication and used NLP-powered feeds and recommendations, improving result accuracy and engagement by 25%.'},
  'ask-ai':{title:'Ask AI',copy:'A conversational web application enabling users to interact with OpenAI’s GPT-3 language model through a modern server-rendered experience.',flow:'NEXT.JS 13 → SERVER COMPONENTS → GPT-3 → FIREBASE CHAT',result:'Used Firebase for real-time chat storage and enhanced server-side rendering to reduce content-generation processing time.'}
};
const jobs={
  scrum:{label:'CURRENT QUEST',title:'Scrum Digital · Software Engineer',date:'JUNE 2024 — PRESENT',items:[
    'Architected multi-tenant backend infrastructure in Go for OutreachHub.ai, implementing tenant-aware isolation and high-availability patterns for concurrent client workloads.',
    'Containerized core services with Docker and optimized Python automation, reducing infrastructure provisioning time for new tenants by 90%.',
    'Engineered real-time systems using Go concurrency primitives, including goroutines and channels, plus WebSockets for low-latency communication under high client load.',
    'Implemented observability and diagnostic patterns through structured logging and transcript analysis, improving AI chat-service diagnostic accuracy to 95%.',
    'Owned services end to end, including a scalable scheduling engine and lead-capture systems focused on fault tolerance, idempotency and high availability.',
    'Built automated internal tooling for data extraction and threading, eliminating manual data entry from the customer onboarding lifecycle.'
  ]},
  magma:{label:'COMPLETED QUEST',title:'Magmacray · FullStack Intern',date:'JANUARY 2023 — APRIL 2023',items:[
    'Led development of MagmaCray’s flagship project using the MERN stack, applying responsive design and user-friendly interface principles.',
    'Implemented backend components for authentication, authorization, navigation and real-time PG accommodation data, increasing user engagement by 25%.'
  ]}
};
const dialog=document.querySelector('#build-dialog');
document.querySelectorAll('.inspect').forEach(button=>button.addEventListener('click',()=>{const project=projects[button.dataset.modal];dialog.querySelector('h2').textContent=project.title;dialog.querySelector('.dialog-copy').textContent=project.copy;dialog.querySelector('.flow').textContent=project.flow;dialog.querySelector('.dialog-result').textContent=project.result;dialog.showModal()}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
const questLog=document.querySelector('#quest-log');
const renderJob=key=>{const job=jobs[key];questLog.querySelector('.quest-label').textContent=job.label;questLog.querySelector('h3').textContent=job.title;questLog.querySelector('.quest-log-head>span').textContent=job.date;document.querySelector('#quest-items').innerHTML=job.items.map(item=>`<li>${item}</li>`).join('')};
document.querySelectorAll('.quest-node').forEach(node=>node.addEventListener('click',()=>{document.querySelectorAll('.quest-node').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-selected','false')});node.classList.add('active');node.setAttribute('aria-selected','true');renderJob(node.dataset.job)}));
renderJob('scrum');
const tooltip=document.querySelector('#tooltip');
document.querySelectorAll('.slot').forEach(slot=>slot.addEventListener('click',()=>{document.querySelectorAll('.slot').forEach(item=>item.classList.remove('selected'));slot.classList.add('selected');tooltip.textContent=slot.dataset.tip}));
const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.count);let value=0;const timer=setInterval(()=>{value+=3;el.textContent=Math.min(value,target)+'%';if(value>=target)clearInterval(timer)},25);countObserver.unobserve(el)}),{threshold:.8});
document.querySelectorAll('[data-count]').forEach(el=>countObserver.observe(el));
const sound=document.querySelector('#sound');
sound.addEventListener('click',()=>{const on=sound.getAttribute('aria-pressed')==='true';sound.setAttribute('aria-pressed',String(!on));sound.textContent=`SOUND: ${on?'OFF':'ON'}`});
