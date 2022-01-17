import { createRouter, createWebHashHistory } from 'vue-router'

import { PageIdentity, globalDict } from "/@/store/memory"

import HomePage from '/@/pages/homePage.vue'

const routes = [
    { path: PageIdentity.homePage, component: HomePage },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})