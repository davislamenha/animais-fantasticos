import initScrollAnimation from "./modules/scroll-animacao.js";

import initTabNav from "./modules/menu-tab.js";

import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initMenuDropdown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisApi from "./modules/animais-api.js";
import initBitcoinApi from "./modules/bitcoin-api.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";

const scrollSuave = new ScrollSuave("[data-scroll='smooth'] a[href^='#'");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initScrollAnimation();

initTabNav();

initModal();
initTooltip();
initMenuDropdown();
initMenuMobile();
initFuncionamento();
initAnimaisApi();
initBitcoinApi();
