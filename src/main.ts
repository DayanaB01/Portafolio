import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
