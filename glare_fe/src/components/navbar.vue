<template>
    <div class="nav">
        <Toolbar class="border rounded-xl hoverclass">
            <template #start>
                <!-- <h3 class="glare-text">Glare AI</h3> -->
                <div class="container">
                    <div class=" toolbar-item">
                        <label for="category" class="font-medium text-sm">Select category</label>
                        <Dropdown id="category" v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select category" class="width" />
                    </div>
                    <div class="toolbar-item">
                        <label for="category" class="font-medium text-sm">From date</label>
                        <Calendar v-model="filters.startDate" showIcon iconDisplay="input" inputId="icondisplay" />
                    </div>
                    <div class="toolbar-item">
                        <label for="category" class="font-medium text-sm">To date</label>
                        <Calendar v-model="filters.endDate" showIcon iconDisplay="input" inputId="icondisplay" class="p-2"/>
                    </div>
                </div>
            </template>
        </Toolbar>
    </div>
</template>

<script setup lang="ts">
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar'

import { useFilterStore } from '@/stores/filters'
import { ref } from 'vue';

const filters = useFilterStore()

const selectedCity = ref(null);

const cities = ref([
    { name: 'Area terapeutica', code: 'NY' },
    { name: 'Composto', code: 'RM' },
    { name: 'Metodo di somministrazione', code: 'LDN' }
]);


</script>

<style scoped lang="scss">
.glare-text{
    // px-8 py-2 font-semibold text-lg border-r-2 mr-4 border-[#f0f0f0]
    padding: 12px 24px;
    font-weight: 600;
    border-right: 2px solid gray;
    margin-right: 8px;
    border: #f0f0f0;
}
.nav{
    margin: 16px 32px;
    display: flex;
    justify-content: center;
}

.width{
    width: 200px;
}

.container{
    display: flex;
    gap: 16px;
    margin: 0 16px;
    align-items: center;
}

.toolbar-item{
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: baseline;
}

</style>