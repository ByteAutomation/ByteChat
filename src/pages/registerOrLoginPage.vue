<script setup lang="ts">
import logo from '/@/assets/logo.png'
import * as memory from '/@/store/memory'
import functions from '/@/store/functions'
import { reactive } from 'vue';

const dict = reactive({
    data: {
        email: '',
        password: '',
    },
    validators: {
        email: (val: string) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
        },
        password: (val: string) => {
            return /^[A-Za-z]\w{7,14}$/.test(val)
        }
    },
    functions: {
        onSubmit: () => {
            functions.basic.print("Your Email is: " + dict.data.email + "\n\n" + "Your Password is: " + dict.data.password, async () => {
                functions.pages.switchPage(memory.PageIdentity.chatPage)
            })
        }
    }
})
</script>

<template>
    <div class="bigBackground">
        <div class="container">
            <van-form @submit="dict.functions.onSubmit">
                <van-field
                    v-model="dict.data.email"
                    name="Email"
                    label="Email"
                    placeholder="Email"
                    :rules="[{ validator: dict.validators.email, required: true, message: 'Email is required' }]"
                />
                <van-field
                    v-model="dict.data.password"
                    type="password"
                    name="Password"
                    label="Password"
                    placeholder="Password"
                    :rules="[{ validator: dict.validators.password, message: 'Password is required' }]"
                />
                <div style="margin: 16px;">
                    <van-row justify="center">
                        <van-button
                            color="linear-gradient(to right, #ff6034, #ee0a24)"
                            type="primary"
                            native-type="submit"
                        >Login/Register</van-button>
                    </van-row>
                </div>
            </van-form>
        </div>
    </div>
</template>

<style lang="scss">
.bigBackground {
    background-color: #f7f8fa;
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
    .van-button {
        width: 120px;
    }
}
</style>