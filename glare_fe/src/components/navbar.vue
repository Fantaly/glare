<template>
    <div class="nav">
        <Toolbar class="border rounded-xl hoverclass">
            <template #start>
                <h3 class="px-8 py-2 font-semibold text-lg border-r-2 mr-4 border-[#f0f0f0]">Glare AI</h3>
                <div class="flex gap-6 p-0 mx-4 items-center">
                    <div class="flex flex-col gap-1 items-baseline">
                        <!-- <label for="category" class="font-medium text-sm">Select category</label> -->
                        <Dropdown id="category" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-[200px] border" />
                    </div>
                    <Calendar v-model="buttondisplay" showIcon :showOnFocus="false" inputId="buttondisplay" />

                </div>

            </template>
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

// .hoverclass{
//     box-shadow: rgba(149, 157, 165, 0.2) 1px 6px 4px
// }

</style>