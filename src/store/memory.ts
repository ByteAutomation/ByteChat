import { computed, reactive } from "vue";

export const PageIdentity = {
    homePage: "/",
    chatPage: "/chat",
}

export const SexIdentity = {
    woman: 0,
    man: 1
}

export const globalDict = reactive({
    pageSelected: PageIdentity.homePage,
    constants: {
    }
})