import { createRouter, createWebHashHistory } from 'vue-router'

import { PageIdentity, globalDict } from "/@/store/memory"

import HomePage from '/@/pages/homePage.vue'
import ChatPage from '/@/pages/chatPage.vue'
import RegisterOrLoginPage from '/@/pages/registerOrLoginPage.vue'

const routes = [
    { path: PageIdentity.homePage, component: HomePage },
    { path: PageIdentity.chatPage, component: ChatPage },
    { path: PageIdentity.registerOrLoginPage, component: RegisterOrLoginPage },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})