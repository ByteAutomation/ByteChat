import { createRouter, createWebHashHistory } from 'vue-router'

import { PageIdentity, globalDict } from "/@/store/memory"

import HomePage from '/@/pages/homePage.vue'
import ChatPage from '/@/pages/chatPage.vue'

const routes = [
    { path: PageIdentity.homePage, component: HomePage },
    { path: PageIdentity.chatPage, component: ChatPage },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})