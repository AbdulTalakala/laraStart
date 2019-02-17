/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform'

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Profile from './components/Profile.vue'
import Users from './components/Users'
import moment from 'moment'
import VueProgressBar from 'vue-progressbar'

import Swal from 'sweetalert2'
window.Swal  = Swal;

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.toast = toast;

Vue.use('VueProgressBar',{
    color:'rgb(143,255,199)',
    failedColor:'red',
    height: '4px'
})

let routes = [
    {path: '/dashboard',component: Dashboard},
    {path:'/profile',component: Profile},
    {path:'/users',component: Users}
]
// const routes = [
//     { path: '/foo', component:  ExampleComponent},
//     { path: '/bar', component: Bar }
// ]


const router = new VueRouter({
    mode: 'history',
    routes // short for routes: routes h
})

Vue.filter('capitalText',function(text){
   return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created_at){
   return moment(created_at).format('MMMM DD YYYY');
});



/**
 * The following block of code  be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
//Vue.component('dashboard', require('./components/Dashboard.vue'));
//Vue.component('profile', require('./components/Profile.vue'));



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,

});
