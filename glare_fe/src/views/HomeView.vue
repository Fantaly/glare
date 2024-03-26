<script setup lang="ts">
import Navbar from '@/components/navbar.vue'
import { ref } from 'vue';
import Chat from '@/components/chat.vue'
import GraficoLines from '@/components/grafico_lines.vue'
import GraficoWhisker from '@/components/grafico_whisker.vue'
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
	justify-content: center
}
main{
	/* p-10 mx-[200px] flex flex-col gap-10 */
	padding: 10rem;
	margin: 0px 150%;
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
