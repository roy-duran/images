import { createApp } from 'vue';
import { store } from './store';
import { createRouter, createWebHistory } from 'vue-router';
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'
import App from './App';

const app = createApp(App);

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm }
    ]
})

app.use(router);
app.use(store);
app.mount('#app');
