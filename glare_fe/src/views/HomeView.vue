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

</script>

<template>
	<div>
		<Navbar />
		<!-- <TabView>
			<TabPanel v-for="tab in tabs" :key="tab.title" :header="tab.title">
				<div class="content">
					Content here
				</div>
			</TabPanel>
		</TabView> -->
		<!-- <CanvasJSChart :options="options" class="custom" /> -->
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
