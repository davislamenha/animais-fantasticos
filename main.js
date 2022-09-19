/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(lista) {\r\n    this.faqPerguntas = document.querySelectorAll(lista);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(pergunta) {\r\n    pergunta.classList.toggle(this.activeClass);\r\n    pergunta.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adiciona eventos ao accordion\r\n  addAccordionList() {\r\n    this.faqPerguntas.forEach((pergunta) => {\r\n      pergunta.addEventListener(\"click\", () => this.toggleAccordion(pergunta));\r\n    });\r\n  }\r\n\r\n  // iniciar função\r\n  init() {\r\n    if (this.faqPerguntas.length) {\r\n      // ativar primeiro item\r\n      this.toggleAccordion(this.faqPerguntas[0]);\r\n      this.addAccordionList();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, oberserverTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observerTarget = document.querySelector(oberserverTarget);\r\n    this.observerClass = observerClass;\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  // recebe um elemento do dom, com numero em seu texto\r\n  // incrementa a partir de 0 até o numero final\r\n  static incrementarNumero(numero) {\r\n    const total = +numero.innerText;\r\n    const add = Math.floor(total / 100);\r\n\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += add;\r\n      numero.innerText = start;\r\n\r\n      if (start >= total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // ativa incrementar numero para cada numero selecionado\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) =>\r\n      this.constructor.incrementarNumero(numero)\r\n    );\r\n  }\r\n\r\n  // função que ocorre quando a mutação ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n      this.olho.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // verfica quando a classe é adicionada ao elemento target\r\n  addMutationOberserver() {\r\n    this.olho = new MutationObserver(this.handleMutation);\r\n    this.olho.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observerTarget) {\r\n      this.addMutationOberserver();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animais-api.js":
/*!***********************************!*\
  !*** ./js/modules/animais-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaisApi)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction animaisApi(url, target) {\r\n  const elementTarget = document.querySelector(target);\r\n\r\n  // cria a div com o total de animais\r\n  function createAnimal(especie, quantidade) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${especie}</h3><span data-numero>${quantidade}</span>`;\r\n    return div;\r\n  }\r\n\r\n  // preenche cada animal no dom\r\n  function preencherAnimais(animal) {\r\n    const div = createAnimal(animal.especie, animal.quantidade);\r\n    elementTarget.appendChild(div);\r\n  }\r\n\r\n  // anima os números da cada animal\r\n  function animaAnimaisNumeros() {\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\");\r\n    animaNumeros.init();\r\n  }\r\n\r\n  // puxa os animais atravéz de um arquivo json\r\n  // cria cada animal utilizando criarAnimais\r\n  async function criarAnimais() {\r\n    try {\r\n      // fetch e espera da resposta para transformar em json\r\n      const res = await fetch(url);\r\n      const dados = await res.json();\r\n      // apos a transformação de json ativa a transformação para preencher e animar os números\r\n      dados.forEach((animal) => preencherAnimais(animal));\r\n      animaAnimaisNumeros();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n      console.log(\"Algo de errado não deu certo!\");\r\n    }\r\n  }\r\n\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animais-api.js?");

/***/ }),

/***/ "./js/modules/bitcoin-api.js":
/*!***********************************!*\
  !*** ./js/modules/bitcoin-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ bitcoinApi)\n/* harmony export */ });\nfunction bitcoinApi(url, target) {\r\n  const btc = document.querySelector(target);\r\n  async function getBtc() {\r\n    try {\r\n      const res = await fetch(url);\r\n      const dados = await res.json();\r\n      btc.innerText = (1000 / dados.BRL.sell).toFixed(4);\r\n    } catch (erro) {\r\n      console.log(erro);\r\n      console.log(\"Algo de errado não deu certo!\");\r\n    }\r\n  }\r\n  return getBtc();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/bitcoin-api.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor(target) {\r\n    this.funcionamento = document.querySelector(target);\r\n    this.classe = \"ativo\";\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.diasSemana = this.funcionamento.dataset.semana.split(\",\").map(Number);\r\n    this.horarioSemana = this.funcionamento.dataset.horario\r\n      .split(\",\")\r\n      .map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.dataAgora = new Date();\r\n    this.diaAgora = this.dataAgora.getDay();\r\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\r\n  }\r\n\r\n  estaAberto() {\r\n    const SemanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\r\n    const horarioAberto =\r\n      this.horarioAgora >= this.horarioSemana[0] &&\r\n      this.horarioAgora < this.horarioSemana[1];\r\n    return SemanaAberto && horarioAberto;\r\n  }\r\n\r\n  ativaAberto() {\r\n    if (this.estaAberto()) {\r\n      this.funcionamento.classList.add(this.classe);\r\n    } else {\r\n      this.funcionamento.classList.remove(this.classe);\r\n    }\r\n  }\r\n\r\n  init() {\r\n    if (this.funcionamento) {\r\n      this.dadosFuncionamento();\r\n      this.dadosAgora();\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-dropdown.js":
/*!*************************************!*\
  !*** ./js/modules/menu-dropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuDropdown)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nclass MenuDropdown {\r\n  constructor(menu, events = [\"click\", \"touchstart\"]) {\r\n    this.dropdown = document.querySelectorAll(menu);\r\n    this.classe = \"ativo\";\r\n    this.events = events;\r\n    this.activeDropdown = this.activeDropdown.bind(this);\r\n  }\r\n\r\n  // adiciona os eventos ao dropdown\r\n  addDropdownEvent() {\r\n    this.dropdown.forEach((menu) => {\r\n      this.events.forEach((events) => {\r\n        menu.addEventListener(events, this.activeDropdown);\r\n      });\r\n    });\r\n  }\r\n\r\n  // ativa o dropdown e observa o clique fora dele\r\n  activeDropdown(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.classe);\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove(this.classe);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.dropdown.length) {\r\n      this.addDropdownEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-dropdown.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(menuBtn, menuList, events = [\"click\", \"touchstart\"]) {\r\n    this.menuBtn = document.querySelector(menuBtn);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.events = events;\r\n    this.classe = \"ativo\";\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    event.preventDefault();\r\n    this.menuBtn.classList.toggle(this.classe);\r\n    this.menuList.classList.toggle(this.classe);\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\r\n      this.menuBtn.classList.remove(this.classe);\r\n      this.menuList.classList.remove(this.classe);\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((evento) =>\r\n      this.menuBtn.addEventListener(evento, this.openMenu)\r\n    );\r\n  }\r\n\r\n  init() {\r\n    if (this.menuBtn && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/menu-tab.js":
/*!********************************!*\
  !*** ./js/modules/menu-tab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(imagens, info) {\r\n    this.tabImg = document.querySelectorAll(imagens);\r\n    this.tabInfo = document.querySelectorAll(info);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  // ativa a tab de acordo com o index\r\n  ativarTab(index) {\r\n    this.tabInfo.forEach((info) => info.classList.remove(this.activeClass));\r\n    const { anime } = this.tabInfo[index].dataset;\r\n    this.tabInfo[index].classList.add(this.activeClass, anime);\r\n  }\r\n\r\n  // adicionar eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabImg.forEach((img, index) => {\r\n      img.addEventListener(\"click\", () => this.ativarTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabImg.length && this.tabInfo.length) {\r\n      // ativar primeiro item\r\n      this.ativarTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-tab.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(modal, section, fechar) {\r\n    this.modal = document.querySelector(modal);\r\n    this.section = document.querySelector(section);\r\n    this.fechar = document.querySelector(fechar);\r\n\r\n    // bind this ao callback para fazer referência ao objeto da classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueFora = this.cliqueFora.bind(this);\r\n  }\r\n\r\n  // abre ou fecha o modal\r\n  toggleModal() {\r\n    return this.section.classList.toggle(\"ativo\");\r\n  }\r\n\r\n  // adiciona o evento de toggle ao modal\r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal(event);\r\n  }\r\n\r\n  // fecha ao clicar do lado de fora\r\n  cliqueFora(event) {\r\n    if (event.target === this.section) this.toggleModal();\r\n  }\r\n\r\n  // adiciona os eventos ao modal\r\n  addModalEvent() {\r\n    this.modal.addEventListener(\"click\", this.eventToggleModal);\r\n    this.fechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.section.addEventListener(\"click\", this.cliqueFora);\r\n  }\r\n\r\n  init() {\r\n    if (this.modal && this.section && this.fechar) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callBack) {\r\n  const html = document.documentElement;\r\n  const dataOutside = \"data-outside\";\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(dataOutside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callBack();\r\n    }\r\n  }\r\n  if (!element.hasAttribute(dataOutside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n      element.setAttribute(dataOutside, \"\");\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnimation)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ScrollAnimation {\r\n  constructor(target, activeClass) {\r\n    this.target = document.querySelectorAll(target);\r\n    this.activeClass = activeClass;\r\n    this.animacaoHeight = window.innerHeight * 0.7;\r\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 50);\r\n  }\r\n\r\n  // pega a distancia de cada item em relacao ao topo\r\n  getDistance() {\r\n    this.distance = [...this.target].map((section) => {\r\n      const sectionTop = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offsetTop: Math.floor(sectionTop - this.animacaoHeight),\r\n      };\r\n    });\r\n  }\r\n\r\n  // verifca a distancia de cada objeto em relacao ao scroll\r\n  checkDistance() {\r\n    this.distance.forEach((item) => {\r\n      if (window.pageYOffset > item.offsetTop) {\r\n        item.element.classList.add(this.activeClass);\r\n      } else if (item.element.classList.contains(this.activeClass)) {\r\n        item.element.classList.remove(this.activeClass);\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.target.length) {\r\n      this.getDistance();\r\n      this.checkDistance();\r\n      window.addEventListener(\"scroll\", this.checkDistance);\r\n    }\r\n\r\n    return this;\r\n  }\r\n\r\n  // remove o event de scroll\r\n  stop() {\r\n    window.removeEventListener(\"scroll\", this.checkDistance);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollSection = this.scrollSection.bind(this);\r\n  }\r\n\r\n  scrollSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(slide, wrapper) {\r\n    this.slide = document.querySelector(slide);\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.dist = { finalposition: 0, startX: 0, movement: 0 };\r\n    this.activeClass = \"ativo\";\r\n    this.changeEvent = new Event(\"changeEvent\");\r\n  }\r\n\r\n  transition(active) {\r\n    this.slide.style.transition = active ? \"transform .3s\" : \"\";\r\n  }\r\n\r\n  moveSlide(distX) {\r\n    this.dist.movePosition = distX;\r\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.5;\r\n    return this.dist.finalposition - this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let movetype;\r\n\r\n    if (event.type === \"mousedown\") {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      movetype = \"mousemove\";\r\n    } else {\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n      movetype = \"touchmove\";\r\n    }\r\n    this.wrapper.addEventListener(movetype, this.onMove);\r\n    this.transition(false);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition =\r\n      event.type === \"mousemove\"\r\n        ? event.clientX\r\n        : event.changedTouches[0].clientX;\r\n\r\n    const finalposition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalposition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const movetype = event.type === \"mouseup\" ? \"mousemove\" : \"touchmove\";\r\n    this.wrapper.removeEventListener(movetype, this.onMove);\r\n    this.dist.finalposition = this.dist.movePosition;\r\n    this.changeSlideOnEnd();\r\n    this.transition(true);\r\n  }\r\n\r\n  changeSlideOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.activeNextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.activePrevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  addSlideEvents() {\r\n    this.wrapper.addEventListener(\"mousedown\", this.onStart);\r\n    this.wrapper.addEventListener(\"mouseup\", this.onEnd);\r\n    this.wrapper.addEventListener(\"touchstart\", this.onStart);\r\n    this.wrapper.addEventListener(\"touchend\", this.onEnd);\r\n  }\r\n\r\n  // Slides config\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { position, element };\r\n    });\r\n  }\r\n\r\n  slidesIndexNav(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.moveSlide(activeSlide.position);\r\n    this.slidesIndexNav(index);\r\n    this.dist.finalposition = activeSlide.position;\r\n    this.changeActiveClass();\r\n\r\n    this.wrapper.dispatchEvent(this.changeEvent);\r\n  }\r\n\r\n  changeActiveClass() {\r\n    this.slideArray.forEach((item) => {\r\n      item.element.classList.remove(this.activeClass);\r\n    });\r\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\r\n  }\r\n\r\n  activePrevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n    this.activeControlItem();\r\n  }\r\n\r\n  activeNextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n    this.activeControlItem();\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 500);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener(\"resize\", this.onResize);\r\n  }\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\r\n\r\n    this.activePrevSlide = this.activePrevSlide.bind(this);\r\n    this.activeNextSlide = this.activeNextSlide.bind(this);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(true);\r\n    this.addSlideEvents();\r\n    this.slidesConfig();\r\n    this.addResizeEvent();\r\n    this.changeSlide(0);\r\n    return this;\r\n  }\r\n}\r\n\r\nclass SlideNav extends Slide {\r\n  constructor(slide, wrapper) {\r\n    super(slide, wrapper);\r\n    this.bindControlEvents();\r\n  }\r\n\r\n  addArrow(prev, next) {\r\n    this.prevElement = document.querySelector(prev);\r\n    this.nextElement = document.querySelector(next);\r\n    this.addArrowEvent();\r\n  }\r\n\r\n  addArrowEvent() {\r\n    this.prevElement.addEventListener(\"click\", this.activePrevSlide);\r\n    this.nextElement.addEventListener(\"click\", this.activeNextSlide);\r\n  }\r\n\r\n  createControl() {\r\n    const control = document.createElement(\"ul\");\r\n    control.dataset.control = \"slide\";\r\n    this.slideArray.forEach((item, index) => {\r\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${\r\n        index + 1\r\n      }</a></li>`;\r\n    });\r\n    this.wrapper.appendChild(control);\r\n    return control;\r\n  }\r\n\r\n  eventControl(item, index) {\r\n    item.addEventListener(\"click\", (event) => {\r\n      event.preventDefault();\r\n      this.changeSlide(index);\r\n\r\n      this.wrapper.addEventListener(\"changeEvent\", this.activeControlItem);\r\n    });\r\n  }\r\n\r\n  activeControlItem() {\r\n    this.controlArray.forEach((item) => {\r\n      item.classList.remove(this.activeClass);\r\n    });\r\n    this.controlArray[this.index.active].classList.add(this.activeClass);\r\n  }\r\n\r\n  addControl(customControl) {\r\n    this.control =\r\n      document.querySelector(customControl) || this.createControl();\r\n    this.controlArray = [...this.control.children];\r\n    this.activeControlItem();\r\n    this.controlArray.forEach(this.eventControl);\r\n  }\r\n\r\n  bindControlEvents() {\r\n    this.eventControl = this.eventControl.bind(this);\r\n    this.activeControlItem = this.activeControlItem.bind(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(mapa) {\r\n    this.mapa = document.querySelectorAll(mapa);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n  }\r\n\r\n  // cria a tooltip box e coloca no body\r\n  tipBox(element) {\r\n    const box = document.createElement(\"div\");\r\n    box.classList.add(\"tooltip\");\r\n    box.innerText = element.getAttribute(\"aria-label\");\r\n    document.body.appendChild(box);\r\n    this.box = box;\r\n  }\r\n\r\n  // cria e adiciona os eventos de mousemove e mouseleave\r\n  onMouseOver({ currentTarget }) {\r\n    // cria a tooltipbox e coloca uma propriedade\r\n\r\n    this.tipBox(currentTarget);\r\n\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  // move a tooltip de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n    this.box.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth) {\r\n      this.box.style.left = `${event.pageX - 200}px`;\r\n    } else {\r\n      this.box.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  // remove a tooltip e os eventos de mousemove e mouseleave\r\n  onMouseLeave({ currentTarget }) {\r\n    this.box.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  // adiciona os eventos de mouseover a cada tooltip\r\n  addTooltipEvent() {\r\n    this.mapa.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.mapa.length) {\r\n      this.addTooltipEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_bitcoin_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/bitcoin-api.js */ \"./js/modules/bitcoin-api.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_menu_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu-tab.js */ \"./js/modules/menu-tab.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_animais_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animais-api.js */ \"./js/modules/animais-api.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/menu-dropdown.js */ \"./js/modules/menu-dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-scroll='smooth'] a[href^='#'\");\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_menu_tab_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-tab='img'] li\", \"[data-tab='info'] section\");\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\r\n  \"[data-modal='abrir']\",\r\n  \".modal-container\",\r\n  \"[data-modal='fechar']\"\r\n);\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\n(0,_modules_animais_api_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"./animaisapi.json\", \".numeros-grid\");\r\n(0,_modules_bitcoin_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\r\n\r\nconst scrollAnima = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-anime='scroll']\", \"ativo\");\r\nscrollAnima.init();\r\n\r\nconst dropdown = new _modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-dropdown]\");\r\ndropdown.init();\r\n\r\nconst menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\r\nmenuMobile.init();\r\n\r\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\"[data-semana]\");\r\nfuncionamento.init();\r\n\r\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"](\".slide\", \".slide-wrapper\");\r\nslide.init();\r\nslide.addControl(\".custom-controls\");\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;