import { Meteor } from "meteor/meteor";
import ElementUI from "element-ui";
import Vue from "vue";
Vue.use(ElementUI, { size: "large" });

import './main.html';
import App from "../imports/ui/App";


Meteor.startup(() => {
  new Vue({ ...App }).$mount("app");
});
