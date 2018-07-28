import Vue from "vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare as fasCheckSquare,
  faSpinner as fasSpinner,
  faCoffee as fasCoffee,
  faList as fasList,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCheckSquare as farCheckSquare,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCcVisa as fabCcVisa,
} from "@fortawesome/free-brands-svg-icons";

import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import "element-ui/lib/theme-chalk/index.css";
// import "./styles/element-variables.scss";

import App from "@/app";
import "@/styles/main.scss";


faLibrary.add(
  // FIXME: need to remove
  fasCheckSquare,
  farCheckSquare,
  fabCcVisa,
  fasSpinner,
  fasCoffee,
  fasList,
);
Vue.component("fa-icon", FontAwesomeIcon);

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount("#app");
