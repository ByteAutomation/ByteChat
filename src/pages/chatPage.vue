<script setup lang="ts">
import * as memory from '/@/store/memory'
import functions from '/@/store/functions'
import { onActivated, onMounted, reactive, ref, unref, watch } from 'vue';

import ChatWindow, { Message, Room } from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'

const dict = reactive({
    tempData: {
        messageLoaded: false,
        roomLoaded: false
    },
    data: {
        rooms: [
            {
                roomId: 1,
                roomName: 'Chat Room',
                avatar: '/logo.png',
                unreadCount: 4,
                index: 3,
                lastMessage: {
                    content: 'You got new messages',
                    senderId: 1234,
                    username: 'John Doe',
                    timestamp: '10:20',
                    saved: true,
                    distributed: false,
                    seen: false,
                    new: true
                },
                users: [
                    {
                        _id: 1,
                        username: 'Target',
                        avatar: '/logo.png',
                        status: {
                            state: 'offline',
                            lastChanged: 'today, 14:30'
                        }
                    },
                    {
                        _id: 2,
                        username: 'yingshaoxo',
                        avatar: '/logo.png',
                        status: {
                            state: 'online',
                            lastChanged: '14 July, 20:00'
                        }
                    }
                ],
                typingUsers: []
            }
        ] as Room[],
        messages: [
            {
                _id: 1, //message id
                indexId: 1,
                content: 'Hi there!',
                senderId: 2,
                username: 'yingshaoxo',
                avatar: '/logo.png',
                date: '13 November',
                timestamp: '10:20',
                system: true,
                saved: true,
                distributed: true,
                seen: true,
                deleted: false,
                failure: false,
                disableActions: true,
                disableReactions: true,
            }
        ] as Message[],
        currentUserId: 2
    },
    functions: {
        fetchMessages: ({ room, options }: any) => {
            dict.tempData.messageLoaded = false

            // use timeout to imitate async server fetched data
            setTimeout(() => {
                dict.tempData.messageLoaded = true
            }, 500)
        },
        sendMessage: async ({ content, roomId, files, replyMessage }: any) => {
            const message = {
                _id: roomId,
                content: content,
                senderId: dict.data.currentUserId,
                username: 'yingshaoxo',
                avatar: '/logo.png',
                date: '13 November',
                timestamp: '10:20',
                system: false,
                saved: true,
                distributed: true,
                seen: true,
                deleted: false,
                failure: false,
                disableActions: true,
                disableReactions: true,
                files: [
                ],
            }

            dict.data.messages = [...dict.data.messages, message]
            setTimeout(() => {
                dict.data.messages = [...dict.data.messages, {
                    _id: roomId,
                    content: "Hi, You!",
                    senderId: 1,
                    username: 'Target',
                    avatar: '/logo.png',
                    distributed: true,
                    date: '13 November',
                    timestamp: new Date().toTimeString().split(' ')[0].split(':').slice(0, 2).join(':'),
                }]
            }, 1000)
        },
    }
})

onMounted(async () => {
    setTimeout(() => {
        dict.tempData.messageLoaded = true
        dict.tempData.roomLoaded = true
    }, 1000)
})
</script>

<template>
    <div class="bigBackground">
        <div class="container">
            <chat-window
                height="100vh"
                :current-user-id="dict.data.currentUserId"
                :rooms="dict.data.rooms"
                :messages="dict.data.messages"
                :messagesLoaded="dict.tempData.messageLoaded"
                :roomsLoaded="dict.tempData.roomLoaded"
                rooms-order="desc"
                :styles="{
                    general: {
                        color: '#0a0a0a',
                        colorSpinner: '#333',
                        borderStyle: '1px solid #e1e4e8'
                    },
                    footer: {
                        background: '#f8f9fa',
                        backgroundReply: 'rgba(0, 0, 0, 0.08)'
                    },
                    icons: {
                        search: '#9ca6af'
                    }
                }"
                @send-message="dict.functions.sendMessage"
                @fetch-messages="dict.functions.fetchMessages"
            />
        </div>
    </div>
</template>

<style lang="scss">
.bigBackground {
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
}
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    .van-image {
        width: 100%;
        height: 100vw;
    }

    .gestureIndicatorBar {
        margin-top: 5px;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;

        .van-icon {
            font-size: 50px;
            color: #ff6034;
            margin: 0px 10px;
        }

        .arrowIcon {
            font-size: 50px;
            color: #f3f6fa;
            margin: 0px 10px;
        }
    }
}

.gradientGreen {
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(183, 223, 71, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(183, 223, 71, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(183, 223, 71, 1) 0%,
        rgba(0, 212, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
}

.gradientRed {
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 212, 255, 1) 0%,
        rgba(255, 0, 144, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 212, 255, 1) 0%,
        rgba(255, 0, 144, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(0, 212, 255, 1) 0%,
        rgba(255, 0, 144, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#ff0090",GradientType=1);
}

.vac-info-wrapper {
    text-align: start;
}

.vac-message-card {
    .vac-format-message-wrapper {
        text-align: start;
    }
}
</style>