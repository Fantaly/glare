<template>
    <div class="chat">        
        <div class="column">
            <div>Chat with me</div>
            <div class="message" v-if="!loading && sended">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <Skeleton height="2rem" class="mb-2" v-if="loading"></Skeleton>
        </div>
        
        <footer>
            <form @submit.prevent="handleLoading">
                <input v-model="value" type="text" class="custom-input" placeholder="Ask me anything">
            </form>
        </footer>

    </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';

import {ref } from 'vue';

const loading = ref(false)
const sended = ref(false)
const value = ref("")

function handleLoading(){
    value.value = ""
    loading.value = true
    setTimeout(function(){
        sended.value = true
        loading.value = false
}, 2000);
}

</script>

<style scoped>

.column{
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.chat{
    width: 400px;
    border-radius: 8px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    gap: 124px;
    padding: 48px;
    border: 1px solid rgb(238, 238, 238);
}

footer{
    display: flex;
    align-items: end;
    justify-content: end;
}

.custom-input{
    border: none;
    background-color: rgb(205, 255, 238);
    padding: 1rem;
    border-radius: 24px;
    color: black;
    font-weight: 500;
}

.message{
    border-radius: 16px;
    font-weight: 500;
}
</style>