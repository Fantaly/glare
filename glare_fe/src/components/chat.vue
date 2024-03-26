<template>
    <div class="chat">
        <div class="message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <footer>
            <form action="">
                <input type="text" class="custom-input" placeholder="Ask me anything">
            </form>
        </footer>
    </div>
</template>

<script setup lang="ts">

import InputText from 'primevue/inputtext';
import { useFilterStore } from '../stores/filters'
import FloatLabel from 'primevue/floatlabel';


import {ref } from 'vue';

const value = ref()
</script>

<style scoped>

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
    padding: 16px;
    border-radius: 16px;
    font-weight: 500;
}
</style>