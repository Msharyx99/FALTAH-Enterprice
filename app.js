const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

const i18n = {
  en:{tagline:'Knowledge That Powers Reliability',knowledgeHub:'Knowledge Hub',home:'Home',library:'Library',learning:'Learning',admin:'Admin',settings:'Settings',signature:'Understand it. Apply it. Excel.',enterprise:'Enterprise Technical Academy',sprint3:'Sprint 3 • Enterprise UI',heroTitle:'Technical knowledge, simplified into powerful short films.',heroText:'A professional learning hub to preserve experience, explain equipment, and develop future operators.',exploreLibrary:'Explore Library',uploadLesson:'Upload Lesson',featured:'Featured Lessons',viewAll:'View all',categories:'Categories',dashboard:'Learning Dashboard',totalLessons:'Total Lessons',favorites:'Favorites',offlineReady:'Offline Ready',libraryTitle:'Technical Films Library',libraryText:'Search, filter, and open FALTAH short lessons.',learningPaths:'Learning Paths',adminLogin:'Admin Login',adminText:'Enter admin password to upload and manage lessons.',login:'Login',adminDashboard:'Admin Dashboard',logout:'Logout',titleEn:'Title English',titleAr:'Title Arabic',category:'Category',difficulty:'Difficulty',duration:'Duration',provider:'Knowledge Provider',videoUrl:'Video URL',descriptionEn:'Description English',descriptionAr:'Description Arabic',learningPoints:'Learning Points',saveLesson:'Save Lesson',clear:'Clear',language:'Language',languageText:'English and Arabic are active. The structure is ready for five languages.',appearance:'Appearance',appearanceText:'Switch between dark and light mode.',installApp:'Install App',installText:'On iPhone: Safari → Share → Add to Home Screen.',beginner:'Beginner',intermediate:'Intermediate',advanced:'Advanced'},
  ar:{tagline:'المعرفة التي تعزز الاعتمادية',knowledgeHub:'منصة المعرفة',home:'الرئيسية',library:'المكتبة',learning:'التعلم',admin:'المشرف',settings:'الإعدادات',signature:'افهمها. طبّقها. تميّز.',enterprise:'أكاديمية المعرفة الفنية',sprint3:'الإصدار الثالث • واجهة مؤسسية',heroTitle:'المعرفة الفنية مبسطة في أفلام قصيرة مؤثرة.',heroText:'منصة تعليمية احترافية لحفظ الخبرات وشرح المعدات وتطوير الجيل القادم من المشغلين.',exploreLibrary:'استعرض المكتبة',uploadLesson:'رفع درس',featured:'الدروس المميزة',viewAll:'عرض الكل',categories:'التصنيفات',dashboard:'لوحة التعلم',totalLessons:'إجمالي الدروس',favorites:'المفضلة',offlineReady:'جاهزية دون اتصال',libraryTitle:'مكتبة الأفلام الفنية',libraryText:'ابحث وصفّي وافتح دروس فلته القصيرة.',learningPaths:'مسارات التعلم',adminLogin:'دخول المشرف',adminText:'أدخل كلمة مرور المشرف لإدارة الدروس.',login:'دخول',adminDashboard:'لوحة المشرف',logout:'خروج',titleEn:'العنوان بالإنجليزية',titleAr:'العنوان بالعربية',category:'التصنيف',difficulty:'المستوى',duration:'المدة',provider:'مقدم المعرفة',videoUrl:'رابط الفيديو',descriptionEn:'الوصف بالإنجليزية',descriptionAr:'الوصف بالعربية',learningPoints:'نقاط التعلم',saveLesson:'حفظ الدرس',clear:'مسح',language:'اللغة',languageText:'الإنجليزية والعربية مفعّلتان والهيكل جاهز لخمس لغات.',appearance:'المظهر',appearanceText:'التبديل بين الوضع الداكن والفاتح.',installApp:'تثبيت التطبيق',installText:'في الآيفون: سفاري ← مشاركة ← إضافة إلى الشاشة الرئيسية.',beginner:'مبتدئ',intermediate:'متوسط',advanced:'متقدم'}
};
const categories = [
  ['all','✨','All','الكل'],['Process Systems','🏭','Process Systems','أنظمة المعالجة'],['Rotating Equipment','⚙️','Rotating Equipment','المعدات الدوارة'],['Valves','🚰','Valves','الصمامات'],['Instrumentation','📈','Instrumentation','الأجهزة الدقيقة'],['Electrical','⚡','Electrical','الكهرباء'],['Maintenance','🔧','Maintenance','الصيانة'],['Fundamentals','📚','Fundamentals','الأساسيات']
];
const starterLessons = [
  {id:'l1',category:'Process Systems',titleEn:'How Three-Phase Separator Works',titleAr:'كيف يعمل الفاصل ثلاثي الطور',descEn:'Simple visual explanation of how gas, oil, and water are separated inside a three-phase separator.',descAr:'شرح مبسط لكيفية فصل الغاز والزيت والماء داخل الفاصل ثلاثي الطور.',duration:'04:00',difficulty:'Beginner',provider:'Process Team',videoUrl:'',points:['Inlet diverter','Gravity separation','Oil outlet','Water outlet'],featured:true},
  {id:'l2',category:'Rotating Equipment',titleEn:'Centrifugal Pump Fundamentals',titleAr:'أساسيات مضخة الطرد المركزي',descEn:'Explains impeller action, casing, discharge pressure, and why minimum flow is important.',descAr:'شرح المروحة والغلاف وضغط التصريف وأهمية الحد الأدنى للتدفق.',duration:'05:00',difficulty:'Beginner',provider:'Rotating Equipment SME',videoUrl:'',points:['Impeller','Volute casing','Mechanical seal','Minimum flow'],featured:true},
  {id:'l3',category:'Valves',titleEn:'Gate Valve vs Globe Valve',titleAr:'الفرق بين Gate Valve و Globe Valve',descEn:'Shows the practical difference between isolation valves and throttling valves.',descAr:'يوضح الفرق العملي بين صمامات العزل وصمامات التحكم بالتدفق.',duration:'03:00',difficulty:'Beginner',provider:'Maintenance SME',videoUrl:'',points:['Isolation','Throttling','Pressure drop','Correct application'],featured:true},
  {id:'l4',category:'Instrumentation',titleEn:'Pressure Transmitter Basics',titleAr:'أساسيات مرسل الضغط',descEn:'How pressure is sensed and converted into a control system signal.',descAr:'كيف يتم قياس الضغط وتحويله إلى إشارة لنظام التحكم.',duration:'04:30',difficulty:'Intermediate',provider:'Instrument SME',videoUrl:'',points:['Sensing element','4-20 mA','Calibration','Impulse line'],featured:false},
  {id:'l5',category:'Valves',titleEn:'What is a PSV?',titleAr:'ما هو صمام الحماية PSV؟',descEn:'Short lesson explaining pressure safety valve purpose and overpressure protection.',descAr:'درس قصير يشرح هدف صمام الأمان للحماية من الضغط الزائد.',duration:'03:45',difficulty:'Intermediate',provider:'Safety / Maintenance',videoUrl:'',points:['Set pressure','Relief path','Overpressure protection','Inspection'],featured:true},
  {id:'l6',category:'Fundamentals',titleEn:'What is Cavitation?',titleAr:'ما هو التكهف في المضخات؟',descEn:'Explains cavitation, symptoms, damage, and prevention in pumps.',descAr:'شرح التكهف وأعراضه وأضراره وطريقة تجنبه في المضخات.',duration:'04:15',difficulty:'Intermediate',provider:'Reliability Team',videoUrl:'',points:['Vapor bubbles','Noise and vibration','Impeller damage','NPSH'],featured:false}
];
let state = {
  lang: localStorage.getItem('faltah_lang') || 'en',
  theme: localStorage.getItem('faltah_theme') || 'dark',
  page: 'home',
  filter:'all',
  search:'',
  admin: sessionStorage.getItem('faltah_admin') === 'true',
  lessons: JSON.parse(localStorage.getItem('faltah_lessons_v3') || 'null') || starterLessons,
  favorites: JSON.parse(localStorage.getItem('faltah_favorites') || '[]')
};

function t(k){return i18n[state.lang][k] || i18n.en[k] || k}
function localTitle(l){return state.lang==='ar' && l.titleAr ? l.titleAr : l.titleEn}
function localDesc(l){return state.lang==='ar' && l.descAr ? l.descAr : l.descEn}
function save(){localStorage.setItem('faltah_lessons_v3', JSON.stringify(state.lessons));localStorage.setItem('faltah_favorites', JSON.stringify(state.favorites));}
function iconFor(cat){return (categories.find(c=>c[0]===cat)||['','🎬'])[1]}
function esc(s=''){return String(s).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function applyLang(){
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $('#langBtn').textContent = state.lang === 'en' ? 'العربية' : 'English';
  render();
}
function applyTheme(){document.body.classList.toggle('light', state.theme==='light'); $('#themeBtn').textContent=state.theme==='light'?'☀️':'🌙';}
function openPage(page){state.page=page;$$('.page').forEach(p=>p.classList.toggle('active', p.id===page));$$('.nav-link').forEach(n=>n.classList.toggle('active', n.dataset.page===page));$('#pageTitle').textContent = page==='home'?'FALTAH Enterprise':t(page)||page;window.scrollTo({top:0,behavior:'smooth'});}
function filteredLessons(){return state.lessons.filter(l=>{const q=state.search.toLowerCase();const matchFilter=state.filter==='all'||l.category===state.filter;const hay=[l.titleEn,l.titleAr,l.descEn,l.descAr,l.category,l.provider,l.difficulty].join(' ').toLowerCase();return matchFilter && (!q || hay.includes(q));});}
function lessonCard(l){const fav=state.favorites.includes(l.id);return `<article class="lesson-card panel" data-open="${l.id}"><button class="fav" data-fav="${l.id}" title="Favorite">${fav?'⭐':'☆'}</button><div class="lesson-thumb">${iconFor(l.category)}</div><span class="meta">${esc(l.category)} • ${esc(l.duration)} • ${esc(l.difficulty)}</span><h4>${esc(localTitle(l))}</h4><p>${esc(localDesc(l))}</p><small>${esc(l.provider||'FALTAH Team')}</small></article>`}
function render(){
  $('#featuredLessons').innerHTML = state.lessons.filter(l=>l.featured).slice(0,4).map(lessonCard).join('');
  $('#lessonGrid').innerHTML = filteredLessons().map(lessonCard).join('') || `<div class="panel" style="padding:22px">No lessons found.</div>`;
  $('#categoryGrid').innerHTML = categories.filter(c=>c[0]!=='all').map(c=>`<div class="category-card panel" data-cat="${c[0]}"><span class="cat-icon">${c[1]}</span><b>${state.lang==='ar'?c[3]:c[2]}</b><p>${state.lessons.filter(l=>l.category===c[0]).length} lessons</p></div>`).join('');
  $('#filters').innerHTML = categories.map(c=>`<button class="filter-btn ${state.filter===c[0]?'active':''}" data-filter="${c[0]}">${c[1]} ${state.lang==='ar'?c[3]:c[2]}</button>`).join('');
  $('#categorySelect').innerHTML = categories.filter(c=>c[0]!=='all').map(c=>`<option value="${c[0]}">${state.lang==='ar'?c[3]:c[2]}</option>`).join('');
  $('#mLessons').textContent=state.lessons.length; $('#mFav').textContent=state.favorites.length;
  $('#pathGrid').innerHTML = [['Operator Fundamentals',35,'📚'],['Rotating Equipment',22,'⚙️'],['Valves Specialist',15,'🚰'],['Process Systems',28,'🏭']].map(p=>`<div class="path-card panel"><span class="cat-icon">${p[2]}</span><h3>${p[0]}</h3><div class="progress"><span style="width:${p[1]}%"></span></div><p>${p[1]}% complete</p></div>`).join('');
  $('#adminPanel').classList.toggle('hidden', !state.admin); $('#loginPanel').classList.toggle('hidden', state.admin);
  $('#adminList').innerHTML = state.lessons.map(l=>`<div class="admin-item panel"><div><b>${esc(localTitle(l))}</b><p>${esc(l.category)} • ${esc(l.provider||'')}</p></div><div><button data-edit="${l.id}">Edit</button><button class="danger" data-delete="${l.id}">Delete</button></div></div>`).join('');
}
function openLesson(id){const l=state.lessons.find(x=>x.id===id); if(!l)return; $('#dialogContent').innerHTML=`<div class="dialog-inner"><span class="meta">${esc(l.category)} • ${esc(l.difficulty)} • ${esc(l.duration)}</span><h1>${esc(localTitle(l))}</h1><p>${esc(localDesc(l))}</p><div class="video-box">${l.videoUrl?`<a href="${esc(l.videoUrl)}" target="_blank" rel="noopener">▶ Open Video</a>`:'▶ Video placeholder'}</div><h3>${t('learningPoints')}</h3><ul>${(l.points||[]).map(p=>`<li>${esc(p)}</li>`).join('')}</ul><p><b>${t('provider')}:</b> ${esc(l.provider||'FALTAH Team')}</p></div>`; $('#lessonDialog').showModal();}
function fillForm(id){const l=state.lessons.find(x=>x.id===id); if(!l)return; openPage('admin'); $('#lessonId').value=l.id; $('#titleEn').value=l.titleEn; $('#titleAr').value=l.titleAr||''; $('#categorySelect').value=l.category; $('#difficultySelect').value=l.difficulty; $('#duration').value=l.duration; $('#provider').value=l.provider||''; $('#videoUrl').value=l.videoUrl||''; $('#descEn').value=l.descEn||''; $('#descAr').value=l.descAr||''; $('#points').value=(l.points||[]).join('\n');}
function clearForm(){$('#lessonForm').reset(); $('#lessonId').value='';}

window.addEventListener('load',()=>{setTimeout(()=>$('#splash').classList.add('hide'),950);});
if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
applyTheme(); applyLang(); openPage('home');

document.addEventListener('click',e=>{
  const nav=e.target.closest('[data-page]'); if(nav) openPage(nav.dataset.page);
  const jump=e.target.closest('[data-page-jump]'); if(jump) openPage(jump.dataset.pageJump);
  const cat=e.target.closest('[data-cat]'); if(cat){state.filter=cat.dataset.cat;openPage('library');render();}
  const filter=e.target.closest('[data-filter]'); if(filter){state.filter=filter.dataset.filter;render();}
  const open=e.target.closest('[data-open]'); if(open && !e.target.closest('[data-fav]')) openLesson(open.dataset.open);
  const fav=e.target.closest('[data-fav]'); if(fav){const id=fav.dataset.fav;state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();render();}
  const edit=e.target.closest('[data-edit]'); if(edit) fillForm(edit.dataset.edit);
  const del=e.target.closest('[data-delete]'); if(del && confirm('Delete this lesson?')){state.lessons=state.lessons.filter(l=>l.id!==del.dataset.delete);save();render();}
});
$('#closeDialog').onclick=()=>$('#lessonDialog').close();
$('#searchInput').oninput=e=>{state.search=e.target.value;render();};
$('#langBtn').onclick=$('#settingsLang').onclick=()=>{state.lang=state.lang==='en'?'ar':'en';localStorage.setItem('faltah_lang',state.lang);applyLang();};
$('#themeBtn').onclick=$('#settingsTheme').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';localStorage.setItem('faltah_theme',state.theme);applyTheme();};
$('#loginBtn').onclick=()=>{if($('#passwordInput').value==='faltah'){state.admin=true;sessionStorage.setItem('faltah_admin','true');render();}else alert('Wrong password');};
$('#logoutBtn').onclick=()=>{state.admin=false;sessionStorage.removeItem('faltah_admin');render();};
$('#clearForm').onclick=clearForm;
$('#lessonForm').onsubmit=e=>{e.preventDefault();const id=$('#lessonId').value || 'l'+Date.now();const item={id,titleEn:$('#titleEn').value,titleAr:$('#titleAr').value,category:$('#categorySelect').value,difficulty:$('#difficultySelect').value,duration:$('#duration').value,provider:$('#provider').value,videoUrl:$('#videoUrl').value,descEn:$('#descEn').value,descAr:$('#descAr').value,points:$('#points').value.split('\n').map(x=>x.trim()).filter(Boolean),featured:false};const idx=state.lessons.findIndex(l=>l.id===id); if(idx>=0) state.lessons[idx]=item; else state.lessons.unshift(item); save(); clearForm(); render(); openPage('library');};
