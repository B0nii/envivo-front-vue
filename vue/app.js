const Vue = require('vue');
Vue.config.productionTip = false

import axios from 'axios'

//axios.defaults.baseURL = 'https://testwebrf.radioformula.com.mx/envivo/api';
axios.defaults.baseURL = 'https://testdo.radioformula.com.mx/envivo/api';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import Helow from './components/helow'
import Estacion104 from './components/104'
import Estacion103 from './components/103'
import Estacion970 from './components/970'
import Estacion1470 from './components/1470'
import Estacion1500 from './components/1500'
import Teleformula from './components/teleformula'
import slider from './components/slider'
import LaMañanera from './components/LaMañanera'

Vue.component('hellow', Helow);
Vue.component('estacion-104', Estacion104);
Vue.component('estacion-103', Estacion103);
Vue.component('estacion-970', Estacion970);
Vue.component('estacion-1470', Estacion1470);
Vue.component('estacion-1500', Estacion1500);
Vue.component('teleformula', Teleformula);
Vue.component('slider', slider);
Vue.component('la-mañanera', LaMañanera);

var vm = new Vue({
    el: '#app',
    data: {},
    created() {},
    methods: {},
});