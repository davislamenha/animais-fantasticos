import initScrollAnimation from "./modules/scroll-animacao.js";

import initTabNav from "./modules/menu-tab.js";
import initAccordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initMenuDropdown from "./modules/menu-dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisApi from "./modules/animais-api.js";
import initBitcoinApi from "./modules/bitcoin-api.js";
import ScrollSuave from "./modules/scroll-suave.js";

const scrollSuave = new ScrollSuave("[data-scroll='smooth'] a[href^='#'");
scrollSuave.init();

initScrollAnimation();

initTabNav();
initAccordion();
initModal();
initTooltip();
initMenuDropdown();
initMenuMobile();
initFuncionamento();
initAnimaisApi();
initBitcoinApi();
