import bitcoinApi from "./modules/bitcoin-api.js";
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/menu-tab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import animaisApi from "./modules/animais-api.js";
import ScrollAnimation from "./modules/scroll-animacao.js";
import MenuDropdown from "./modules/menu-dropdown.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";

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

animaisApi("./animaisapi.json", ".numeros-grid");
bitcoinApi("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnimation("[data-anime='scroll']", "ativo");
scrollAnima.init();

const dropdown = new MenuDropdown("[data-dropdown]");
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();
