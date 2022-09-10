(()=>{"use strict";class t{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const o=setInterval((()=>{i+=s,t.innerText=i,i>=e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.olho.disconnect(),this.animaNumeros())}addMutationOberserver(){this.olho=new MutationObserver(this.handleMutation),this.olho.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationOberserver(),this}}function e(t,e,s){const i=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>{i.removeEventListener(t,n)})),s())}t.hasAttribute(o)||e.forEach((e=>{setTimeout((()=>i.addEventListener(e,n))),t.setAttribute(o,"")}))}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollSection=this.scrollSection.bind(this)}scrollSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}("[data-scroll='smooth'] a[href^='#'").init(),new class{constructor(t){this.faqPerguntas=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionList(){this.faqPerguntas.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.faqPerguntas.length&&(this.toggleAccordion(this.faqPerguntas[0]),this.addAccordionList()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabImg=document.querySelectorAll(t),this.tabInfo=document.querySelectorAll(e),this.activeClass="ativo"}ativarTab(t){this.tabInfo.forEach((t=>t.classList.remove(this.activeClass)));const{anime:e}=this.tabInfo[t].dataset;this.tabInfo[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabImg.forEach(((t,e)=>{t.addEventListener("click",(()=>this.ativarTab(e)))}))}init(){return this.tabImg.length&&this.tabInfo.length&&(this.ativarTab(0),this.addTabNavEvent()),this}}("[data-tab='img'] li","[data-tab='info'] section").init(),new class{constructor(t,e,s){this.modal=document.querySelector(t),this.section=document.querySelector(e),this.fechar=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueFora=this.cliqueFora.bind(this)}toggleModal(){return this.section.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal(t)}cliqueFora(t){t.target===this.section&&this.toggleModal()}addModalEvent(){this.modal.addEventListener("click",this.eventToggleModal),this.fechar.addEventListener("click",this.eventToggleModal),this.section.addEventListener("click",this.cliqueFora)}init(){return this.modal&&this.section&&this.fechar&&this.addModalEvent(),this}}("[data-modal='abrir']",".modal-container","[data-modal='fechar']").init(),new class{constructor(t){this.mapa=document.querySelectorAll(t),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}tipBox(t){const e=document.createElement("div");e.classList.add("tooltip"),e.innerText=t.getAttribute("aria-label"),document.body.appendChild(e),this.box=e}onMouseOver({currentTarget:t}){this.tipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}onMouseMove(t){this.box.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.box.style.left=t.pageX-200+"px":this.box.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.box.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}addTooltipEvent(){this.mapa.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.mapa.length&&this.addTooltipEvent(),this}}("[data-tooltip]").init(),function(e,s){const i=document.querySelector(".numeros-grid");!async function(){try{const e=await fetch("./animaisapi.json");(await e.json()).forEach((t=>function(t){const e=function(t,e){const s=document.createElement("div");return s.classList.add("numero-animal"),s.innerHTML=`<h3>${t}</h3><span data-numero>${e}</span>`,s}(t.especie,t.quantidade);i.appendChild(e)}(t))),new t("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t),console.log("Algo de errado não deu certo!")}}()}(),function(t,e){const s=document.querySelector(".btc-preco");!async function(){try{const t=await fetch("https://blockchain.info/ticker"),e=await t.json();s.innerText=(1e3/e.BRL.sell).toFixed(4)}catch(t){console.log(t),console.log("Algo de errado não deu certo!")}}()}(),new class{constructor(t,e){this.target=document.querySelectorAll(t),this.activeClass=e,this.animacaoHeight=.7*window.innerHeight,this.checkDistance=function(t,e){let s;return(...e)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...e),s=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.target].map((t=>{const e=t.offsetTop;return{element:t,offsetTop:Math.floor(e-this.animacaoHeight)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offsetTop?t.element.classList.add(this.activeClass):t.element.classList.contains(this.activeClass)&&t.element.classList.remove(this.activeClass)}))}init(){return this.target.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']","ativo").init(),new class{constructor(t,e=["click","touchstart"]){this.dropdown=document.querySelectorAll(t),this.classe="ativo",this.events=e,this.activeDropdown=this.activeDropdown.bind(this)}addDropdownEvent(){this.dropdown.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdown)}))}))}activeDropdown(t){t.preventDefault();const s=t.currentTarget;s.classList.add(this.classe),e(s,this.events,(()=>{s.classList.remove(this.classe)}))}init(){return this.dropdown.length&&this.addDropdownEvent(),this}}("[data-dropdown]").init(),new class{constructor(t,e,s=["click","touchstart"]){this.menuBtn=document.querySelector(t),this.menuList=document.querySelector(e),this.events=s,this.classe="ativo",this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuBtn.classList.toggle(this.classe),this.menuList.classList.toggle(this.classe),e(this.menuList,this.events,(()=>{this.menuBtn.classList.remove(this.classe),this.menuList.classList.remove(this.classe)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuBtn.addEventListener(t,this.openMenu)))}init(){return this.menuBtn&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu="button"]','[data-menu="list"]').init(),new class{constructor(t){this.funcionamento=document.querySelector(t),this.classe="ativo"}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto()?this.funcionamento.classList.add(this.classe):this.funcionamento.classList.remove(this.classe)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]").init()})();