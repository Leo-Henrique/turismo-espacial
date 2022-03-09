document.documentElement.classList.add("js");

// bibliotecas
import simpleAnime from "./libraries/simple-anime";

// componentes
import menuMobile from "./components/menu-mobile";
import {btns, tabsNavigation} from "./components/tabs-navigation";


menuMobile();
if (btns.length) {
    tabsNavigation();
}
new simpleAnime;