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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(lista) {\r\n    this.faqPerguntas = document.querySelectorAll(lista);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(pergunta) {\r\n    pergunta.classList.toggle(this.activeClass);\r\n    pergunta.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  // adiciona eventos ao accordion\r\n  addAccordionList() {\r\n    this.faqPerguntas.forEach((pergunta) => {\r\n      pergunta.addEventListener(\"click\", () => this.toggleAccordion(pergunta));\r\n    });\r\n  }\r\n\r\n  // iniciar função\r\n  init() {\r\n    if (this.faqPerguntas.length) {\r\n      // ativar primeiro item\r\n      this.toggleAccordion(this.faqPerguntas[0]);\r\n      this.addAccordionList();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll(\"[data-numero]\");\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const add = Math.floor(total / 100);\r\n\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += add;\r\n        numero.innerText = start;\r\n\r\n        if (start >= total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 25 * Math.random());\r\n    });\r\n  }\r\n  let olho;\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativo\")) {\r\n      olho.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  const target = document.querySelector(\".numeros\");\r\n  olho = new MutationObserver(handleMutation);\r\n  olho.observe(target, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animais-api.js":
/*!***********************************!*\
  !*** ./js/modules/animais-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisApi)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initAnimaisApi() {\r\n  const numerosGrid = document.querySelector(\".numeros-grid\");\r\n  function createAnimal(especie, quantidade) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `<h3>${especie}</h3><span data-numero>${quantidade}</span>`;\r\n    return div;\r\n  }\r\n\r\n  async function animaisApi(url) {\r\n    try {\r\n      const res = await fetch(url);\r\n      const dados = await res.json();\r\n      dados.forEach((animal) => {\r\n        const div = createAnimal(animal.especie, animal.quantidade);\r\n        numerosGrid.appendChild(div);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n      console.log(\"Algo de errado não deu certo!\");\r\n    }\r\n  }\r\n\r\n  animaisApi(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/animais-api.js?");

/***/ }),

/***/ "./js/modules/bitcoin-api.js":
/*!***********************************!*\
  !*** ./js/modules/bitcoin-api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitcoinApi)\n/* harmony export */ });\nfunction initBitcoinApi() {\r\n  const btc = document.querySelector(\".btc-preco\");\r\n\r\n  async function getBtc(url) {\r\n    try {\r\n      const res = await fetch(url);\r\n      const dados = await res.json();\r\n      btc.innerText = (1000 / dados.BRL.sell).toFixed(4);\r\n    } catch (erro) {\r\n      console.log(erro);\r\n      console.log(\"Algo de errado não deu certo!\");\r\n    }\r\n  }\r\n  getBtc(\"https://blockchain.info/ticker\");\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/bitcoin-api.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const diaAgora = dataAgora.getDay();\r\n  const horarioAgora = dataAgora.getHours();\r\n  const SemanaAberto = diasSemana.indexOf(diaAgora) !== -1;\r\n\r\n  if (\r\n    horarioAgora >= horarioSemana[0] &&\r\n    horarioAgora < horarioSemana[1] &&\r\n    SemanaAberto\r\n  ) {\r\n    funcionamento.classList.add(\"ativo\");\r\n  } else {\r\n    funcionamento.classList.remove(\"ativo\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-dropdown.js":
/*!*************************************!*\
  !*** ./js/modules/menu-dropdown.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuDropdown)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuDropdown() {\r\n  const dropdown = document.querySelectorAll(\"[data-dropdown]\");\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n  dropdown.forEach((menu) => {\r\n    [\"click\", \"touchstart\"].forEach((events) => {\r\n      menu.addEventListener(events, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-dropdown.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuBtn = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  if (menuBtn) {\r\n    eventos.forEach((evento) => {\r\n      menuBtn.addEventListener(evento, () => {\r\n        menuBtn.classList.toggle(\"ativo\");\r\n        menuList.classList.toggle(\"ativo\");\r\n        (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n          menuBtn.classList.remove(\"ativo\");\r\n          menuList.classList.remove(\"ativo\");\r\n        });\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/menu-tab.js":
/*!********************************!*\
  !*** ./js/modules/menu-tab.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(imagens, info) {\r\n    this.tabImg = document.querySelectorAll(imagens);\r\n    this.tabInfo = document.querySelectorAll(info);\r\n    this.activeClass = \"ativo\";\r\n  }\r\n\r\n  // ativa a tab de acordo com o index\r\n  ativarTab(index) {\r\n    this.tabInfo.forEach((info) => info.classList.remove(this.activeClass));\r\n    const { anime } = this.tabInfo[index].dataset;\r\n    this.tabInfo[index].classList.add(this.activeClass, anime);\r\n  }\r\n\r\n  // adicionar eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabImg.forEach((img, index) => {\r\n      img.addEventListener(\"click\", () => this.ativarTab(index));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabImg.length && this.tabInfo.length) {\r\n      // ativar primeiro item\r\n      this.ativarTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-tab.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const modal = document.querySelector(\"[data-modal='abrir']\");\r\n  const section = document.querySelector(\".modal-container\");\r\n  const fechar = document.querySelector(\"[data-modal='fechar']\");\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    return section.classList.toggle(\"ativo\");\r\n  }\r\n  function cliqueFora(event) {\r\n    if (event.target === this) toggleModal(event);\r\n  }\r\n  if (modal && section && fechar) {\r\n    modal.addEventListener(\"click\", toggleModal);\r\n    fechar.addEventListener(\"click\", toggleModal);\r\n    section.addEventListener(\"click\", cliqueFora);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimation)\n/* harmony export */ });\nfunction initScrollAnimation() {\r\n  const classeAtivo = \"ativo\";\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n  const animacaoHeight = window.innerHeight * 0.7;\r\n  function animacaoScroll() {\r\n    sections.forEach((section) => {\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const sectionVisivel = sectionTop - animacaoHeight < 0;\r\n      if (sectionVisivel) section.classList.add(classeAtivo);\r\n      else if (section.classList.contains(classeAtivo)) {\r\n        section.classList.remove(classeAtivo);\r\n      }\r\n    });\r\n  }\r\n  if (sections.length) {\r\n    window.addEventListener(\"scroll\", animacaoScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollSection = this.scrollSection.bind(this);\r\n  }\r\n\r\n  scrollSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const mapa = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  function tipBox(element) {\r\n    const box = document.createElement(\"div\");\r\n    box.classList.add(\"tooltip\");\r\n    box.innerText = element.getAttribute(\"aria-label\");\r\n    document.body.appendChild(box);\r\n    return box;\r\n  }\r\n  function onMouseOver() {\r\n    let onMouseMove;\r\n    let onMouseLeave;\r\n    const box = tipBox(this);\r\n    onMouseMove.box = box;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n    onMouseLeave.box = box;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.box.style.top = `${event.pageY + 20}px`;\r\n      this.box.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.box.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  mapa.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu-dropdown.js */ \"./js/modules/menu-dropdown.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_animais_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/animais-api.js */ \"./js/modules/animais-api.js\");\n/* harmony import */ var _modules_bitcoin_api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/bitcoin-api.js */ \"./js/modules/bitcoin-api.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_menu_tab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/menu-tab.js */ \"./js/modules/menu-tab.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-scroll='smooth'] a[href^='#'\");\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"](\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_menu_tab_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"](\"[data-tab='img'] li\", \"[data-tab='info'] section\");\r\ntabNav.init();\r\n\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_menu_dropdown_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_animais_api_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_bitcoin_api_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

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