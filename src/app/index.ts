import { createApp } from 'vue';
import { createPinia } from 'pinia';

import router from '@/app/providers/router';
import App from '@/app/App.vue';
import '@/app/themes/index.scss';
import '@/app/styles/base/index.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
