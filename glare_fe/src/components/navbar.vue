<template>
    <div class="nav">
        <Toolbar>
            <template #start>
                <Dropdown class="" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />

            </template>

            <template #center>
                <IconField iconPosition="left">
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <InputText placeholder="Search" />
                </IconField>
            </template>

            <template #end> <SplitButton label="Save" :model="items"></SplitButton></template>
        </Toolbar>
    </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<style scoped lang="scss">
.nav{
    margin: 16px 32px;
    display: flex;
    justify-content: center;
}

</style>