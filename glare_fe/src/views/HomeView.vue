<script setup>
import Navbar from '@/components/navbar.vue'
import { ref, onMounted } from 'vue'
import Chat from '@/components/chat.vue'
import GraficoLines from '@/components/grafico_lines.vue'
import GraficoWhisker from '@/components/grafico_whisker.vue'
import string_structure_category from '../assets/string_structure_category.json'


async function handleData(){
	const response = await fetch('string_structure.json')
	const data = await response.json();
	console.log(data)
}

onMounted(() => {
	handleData()
})
</script>

<template>
	<div class="flex flex-col gap-8 h-[100vh]">
		<Navbar />

		<main class="">
			<div class="graph">
				<div style="width: 600px;">
					<GraficoLines />
				</div>
				<Chat/>
			</div>
			<div class="graph">
				<div style="width: 600px;">
					<GraficoWhisker />
				</div>
				<Chat/>
			</div>
		</main>

	</div>
</template>

<style>
.graph{
	display: flex;
	gap: 32px;
	justify-content: center;
	padding: 24px;
	/* border: 1px solid rgb(240, 240, 240);
	border-radius: 12px;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
}
main{
	/* p-10 mx-[200px] flex flex-col gap-10 */
	padding: 5rem;
	margin: 0px 50px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.p-tabview-title {
	font-size: 14px;
}

.content{
	padding: 36px;
}
</style>
