import { createApp } from 'vue';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).use(i18n as any)
  .mount('#app');
