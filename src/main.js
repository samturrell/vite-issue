import Vue from 'vue/dist/vue.js';
import './style.css'
import App from './App.vue'
import { BFormInput } from 'bootstrap-vue';

Vue.component('b-form-input', BFormInput);
Vue.component('app', App);

new Vue({
	el: '#app',
})
