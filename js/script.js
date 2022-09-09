import initScrollAnimation from "./modules/scroll-animacao.js";

import initMenuDropdown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisApi from "./modules/animais-api.js";
import initBitcoinApi from "./modules/bitcoin-api.js";

import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/menu-tab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";

const scrollSuave = new ScrollSuave("[data-scroll='smooth'] a[href^='#'");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='img'] li", "[data-tab='info'] section");
tabNav.init();

const modal = new Modal(
  "[data-modal='abrir']",
  ".modal-container",
  "[data-modal='fechar']"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initScrollAnimation();

initMenuDropdown();
initMenuMobile();
initFuncionamento();
initAnimaisApi();
initBitcoinApi();
