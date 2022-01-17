import { PageIdentity, globalDict } from "/@/store/memory"

import { router } from "/@/store/router"
import * as types from "/@/store/types"

import { Dialog } from "vant"
import { ValueOf } from "element-plus/es/components/table/src/table-column/defaults"

const functions = {
    basic: {
        jsonToObj(json: string) {
            return JSON.parse(json)
        },
        objToJson(obj: any) {
            return JSON.stringify(obj)
        },
        dateToTimestamp(date: Date | string) {
            if (typeof date === "string") {
                date = new Date(date)
            }
            return date.getTime()
        },
        timestampToString(timestamp: number | null) {
            if (timestamp === null) {
                return ""
            }
            return new Date(timestamp).toLocaleString()
        },
        timestampToDateString(timestamp: number | null) {
            if (timestamp === null) {
                return ""
            }
            return new Date(timestamp).toLocaleDateString()
        },
        log: (msg: any) => {
            console.log(msg)
        },
        print: (msg: string, nextThingToDo: Function = async () => { }) => {
            Dialog.alert({
                // title: 'Title',
                message: msg,
                theme: 'round-button',
                confirmButtonText: 'Confirm',
            }).then(async () => {
                // on close
                await nextThingToDo()
            });
        },
        openALink: (url: string) => {
            window.open(url)
        },
    },
    pages: {
        switchPage: (page: typeof PageIdentity[keyof typeof PageIdentity]) => {
            globalDict.pageSelected = page
            router.push(page)
        }
    },
}

export default functions 