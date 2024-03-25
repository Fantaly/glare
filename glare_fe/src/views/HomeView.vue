<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { ref } from 'vue';
// const options: object = {
// 	    animationEnabled: true,
// 	    title:{
// 	      text: "Today"
// 	    },
// 	    data: [{
// 		  type: "column",
// 		  dataPoints: [
// 		    { label: "apple",  y: 30 },
// 		    { label: "orange", y: 15 },
// 		    { label: "banana", y: 25 },
// 		    { label: "mango",  y: 30 },
// 		    { label: "grape",  y: 28 }
// 		  ]
// 	    }]
// 	  }

const tabs = ref([
	{ title: 'Tab 1', content: 'Tab 1 Content' },
	{ title: 'Tab 2', content: 'Tab 2 Content' },
	{ title: 'Tab 3', content: 'Tab 3 Content' }
]);

import GraficoLines from '@/components/grafico_lines.vue'
import GraficoWhisker from '@/components/grafico_whisker.vue'
</script>

<template>
	<div class="flex flex-col gap-8 h-[100vh]">
		<Navbar />

		<main class="p-10">
			<div class="p-10 border rounded-xl">
				<GraficoLines />
			</div>
			<div>
				<GraficoWhisker />
			</div>
		</main>

	</div>
</template>

<style>
.tabview {}

.p-tabview-title {
	font-size: 14px;
}

.content{
	padding: 36px;
}
</style>
