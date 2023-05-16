import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import Home from "@/components/Home.vue";
import Movies from "@/components/Movies.vue";

const app = createApp(App);

const routes = [
    {path: '/', component: Home},
    {path: '/movies', component: Movies}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router);

app.mount("#app");