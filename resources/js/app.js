import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue';
import router from './router'


import App from './components/App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};




createApp(App).use(router, VueAxios, axios).use(CKEditor).mount("#example");