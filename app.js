const slides = [
 {title:'বিশ্বস্ত মিস্ত্রি খুঁজুন',sub:'বাড়ি ও ব্যবসার কাজের জন্য সঠিক মানুষটি',img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'},
 {title:'আপনার কাজ, দক্ষ হাতে',sub:'ইলেকট্রিক, প্লাম্বিং, রং ও মেরামত',img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80'},
 {title:'এসি সার্ভিস ও মেরামত',sub:'কাজের ধরন বেছে নিয়ে খুঁজুন',img:'https://images.unsplash.com/photo-1631545806609-7e8d7f5a2f3f?auto=format&fit=crop&w=1200&q=80'},
 {title:'ঘর তৈরিতে দক্ষ কর্মী',sub:'আপনার এলাকার কর্মী খুঁজুন',img:'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80'}
];
const categories = [
 {name:'ইলেকট্রিশিয়ান',icon:'⚡'},{name:'প্লাম্বার',icon:'🚰'},{name:'এসি টেকনিশিয়ান',icon:'❄️'},{name:'রাজমিস্ত্রি',icon:'🧱'},
 {name:'রংমিস্ত্রি',icon:'🖌️'},{name:'কাঠমিস্ত্রি',icon:'🪚'},{name:'টাইলস মিস্ত্রি',icon:'◩'},{name:'ওয়েল্ডার',icon:'🧰'}
];
const workers = [
 {id:1,name:'রহিম মিয়া',trade:'রাজমিস্ত্রি',area:'মিরপুর, ঢাকা',exp:'৮ বছরের অভিজ্ঞতা',rating:'৪.৮',reviews:34,rate:'কাজ অনুযায়ী',photo:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80',bio:'বাড়ি নির্মাণ, দেয়াল, প্লাস্টার ও মেরামতের কাজের ডেমো প্রোফাইল।'},
 {id:2,name:'সুমন আহমেদ',trade:'ইলেকট্রিশিয়ান',area:'উত্তরা, ঢাকা',exp:'৬ বছরের অভিজ্ঞতা',rating:'৪.৭',reviews:21,rate:'কাজ অনুযায়ী',photo:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=300&q=80',bio:'বাড়ির ওয়্যারিং, লাইট, ফ্যান ও বৈদ্যুতিক মেরামতের ডেমো প্রোফাইল।'},
 {id:3,name:'জাকির হোসেন',trade:'প্লাম্বার',area:'মোহাম্মদপুর, ঢাকা',exp:'৫ বছরের অভিজ্ঞতা',rating:'৪.৬',reviews:18,rate:'কাজ অনুযায়ী',photo:'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=300&q=80',bio:'পানির লাইন, কল, বেসিন ও পাইপ মেরামতের ডেমো প্রোফাইল।'},
 {id:4,name:'মিজানুর রহমান',trade:'এসি টেকনিশিয়ান',area:'ধানমন্ডি, ঢাকা',exp:'৭ বছরের অভিজ্ঞতা',rating:'৪.৯',reviews:27,rate:'কাজ অনুযায়ী',photo:'https://images.unsplash.com/photo-1631545806609-7e8d7f5a2f3f?auto=format&fit=crop&w=300&q=80',bio:'এসি সার্ভিসিং, ইনস্টলেশন ও প্রাথমিক সমস্যা নির্ণয়ের ডেমো প্রোফাইল।'},
 {id:5,name:'কামাল উদ্দিন',trade:'রংমিস্ত্রি',area:'বনশ্রী, ঢাকা',exp:'৯ বছরের অভিজ্ঞতা',rating:'৪.৮',reviews:42,rate:'কাজ অনুযায়ী',photo:'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=300&q=80',bio:'দেয়াল রং, পুটি ও ফিনিশিংয়ের ডেমো প্রোফাইল।'}
];
let products = [
 {id:1,name:'হাতে তৈরি পাটের ব্যাগ',price:450,category:'হস্তশিল্প',desc:'ডেমো পণ্য',icon:'👜'},
 {id:2,name:'বাঁশের ঘর সাজানোর সামগ্রী',price:650,category:'হস্তশিল্প',desc:'ডেমো পণ্য',icon:'🎍'},
 {id:3,name:'বাংলাদেশি সুতি পোশাক',price:890,category:'পোশাক',desc:'ডেমো পণ্য',icon:'👕'},
 {id:4,name:'হস্তনির্মিত মাটির পাত্র',price:320,category:'হস্তশিল্প',desc:'ডেমো পণ্য',icon:'🏺'}
];
let currentChat = 'রহিম মিয়া';
let activeCategory = '';
let currentSlide = 0;

function showPage(name){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 const page=document.getElementById('page-'+name); if(page) page.classList.add('active');
 document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===name || (name==='seller'&&n.dataset.page==='market') || (name==='worker'&&n.dataset.page==='search') || (name==='chat'&&n.dataset.page==='messages')));
 window.scrollTo(0,0);
 if(name==='search') renderWorkers();
 if(name==='market') renderProducts();
}
function setSlide(i){
 currentSlide=i; const s=slides[i];
 document.getElementById('heroImage').style.backgroundImage=`url("${s.img}")`;
 document.getElementById('heroTitle').textContent=s.title;
 document.getElementById('heroSubtitle').textContent=s.sub;
 document.querySelectorAll('#heroDots i').forEach((d,j)=>d.classList.toggle('selected',j===i));
}
function renderCategories(){
 const el=document.getElementById('categoryGrid');
 el.innerHTML=categories.map(c=>`<button class="category" onclick="chooseCategory('${c.name}')"><span class="emoji">${c.icon}</span><span>${c.name}</span></button>`).join('');
 document.getElementById('searchChips').innerHTML=categories.map(c=>`<button class="chip ${activeCategory===c.name?'selected':''}" onclick="chooseCategory('${c.name}')">${c.name}</button>`).join('');
}
function chooseCategory(name){activeCategory=activeCategory===name?'':name;document.getElementById('workerSearch').value=activeCategory;renderCategories();showPage('search');renderWorkers();}
function workerCard(w){return `<article class="worker-card"><img class="worker-photo" src="${w.photo}" alt="ডেমো কর্মীর ছবি" onerror="this.style.display='none'"><div class="worker-info"><h3>${w.name}</h3><p>${w.trade} · ${w.area}</p><p>${w.exp}</p><div class="rating">★ ${w.rating} <span style="color:#8993a3;font-weight:400">(${w.reviews} রিভিউ — ডেমো)</span></div><span class="verified">ডেমো প্রোফাইল</span></div><button class="small-btn" onclick="openWorker(${w.id})">দেখুন</button></article>`}
function renderWorkers(){
 const q=(document.getElementById('workerSearch')?.value||'').trim().toLowerCase();
 const a=(document.getElementById('areaSearch')?.value||'').trim().toLowerCase();
 const list=workers.filter(w=>(!q||(w.trade+' '+w.name).toLowerCase().includes(q))&&(!a||w.area.toLowerCase().includes(a)));
 const html=list.length?list.map(workerCard).join():'<div class="notice">মিল পাওয়া যায়নি। অন্য কাজ বা এলাকা লিখে দেখুন।</div>';
 document.getElementById('searchWorkers').innerHTML=html;
 document.getElementById('resultCount').textContent=`${list.length}টি ডেমো প্রোফাইল`;
}
function openWorker(id){
 const w=workers.find(x=>x.id===id); if(!w)return;
 document.getElementById('workerDetail').innerHTML=`<div class="worker-detail-hero"><img src="${w.photo}" alt="ডেমো কর্মী"><h1>${w.name}</h1><p>${w.trade} · ${w.area}</p><p>${w.exp} · ★ ${w.rating}</p><span class="verified">ডেমো প্রোফাইল — যাচাইকৃত নয়</span><p>${w.bio}</p><p><b>আনুমানিক মূল্য:</b> ${w.rate}</p><button class="primary-btn" onclick="openChat('${w.name}')">মেসেজ করুন</button></div>`;
 showPage('worker');
}
function openChat(name){currentChat=name;document.getElementById('chatTitle').textContent=name;document.getElementById('chatMessages').innerHTML='<div class="bubble received">আসসালামু আলাইকুম! কী কাজ করাতে চান?</div>';showPage('chat');}
function sendMessage(e){e.preventDefault();const input=document.getElementById('chatInput');const val=input.value.trim();if(!val)return;const b=document.createElement('div');b.className='bubble sent';b.textContent=val;document.getElementById('chatMessages').appendChild(b);input.value='';document.getElementById('chatMessages').scrollTop=999999;toast('ডেমো মেসেজ যোগ হয়েছে; অনলাইনে পাঠানো হয়নি');}
function renderProducts(){
 const q=(document.getElementById('productSearch')?.value||'').toLowerCase();
 const list=products.filter(p=>(p.name+' '+p.category+' '+p.desc).toLowerCase().includes(q));
 document.getElementById('productGrid').innerHTML=list.map(p=>`<article class="product-card"><div class="product-art">${p.icon||'📦'}</div><div class="product-copy"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.category)} · ${escapeHtml(p.desc||'')}</p><div class="price">৳ ${Number(p.price).toLocaleString('en-US')}</div><button class="small-btn" style="margin-top:9px;width:100%" onclick="toast('অর্ডার সুবিধা পরবর্তী সংস্করণে যোগ হবে')">বিস্তারিত</button></div></article>`).join('') || '<div class="notice">কোনো পণ্য পাওয়া যায়নি।</div>';
}
function addProduct(e){
 e.preventDefault();
 const name=document.getElementById('productName').value.trim();
 const price=Number(document.getElementById('productPrice').value);
 if(!name||price<=0){toast('পণ্যের নাম ও সঠিক দাম দিন');return;}
 const category=document.getElementById('productCategory').value;
 const desc=document.getElementById('productDescription').value.trim()||'বিক্রেতার পণ্য';
 const icons={'হস্তশিল্প':'🧺','পোশাক':'👕','ঘর ও নির্মাণ':'🧱','কৃষিপণ্য':'🌾','অন্যান্য':'📦'};
 products.unshift({id:Date.now(),name,price,category,desc,icon:icons[category]||'📦'});
 e.target.reset();renderProducts();showPage('market');toast('ডেমো পণ্য তালিকায় যোগ হয়েছে');
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function toast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2500);}
renderCategories();
document.getElementById('homeWorkers').innerHTML=workers.slice(0,3).map(workerCard).join('');
renderWorkers();renderProducts();setSlide(0);
setInterval(()=>setSlide((currentSlide+1)%slides.length),4500);
