import { computed, reactive } from "vue";

export const PageIdentity = {
    homePage: "/",
    chatPage: "/chat",
    registerOrLoginPage: "/registerOrLogin",
}

export const globalDict = reactive({
    pageSelected: PageIdentity.homePage,
    constants: {
    }
})