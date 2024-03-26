<template>
    <CanvasJSChart :options="options" class="custom"/>
</template>

<script setup lang="ts">


const options = {
	animationEnabled: true,
	title:{
		text: "Intervalli di confidenza"
	},
	axisX: {
		valueFormatString: "DDD"
	},
	axisY: {
		title: "Confidence",
		includeZero: true
	},
	data: [{
		type: "boxAndWhisker",
		xValueFormatString: "DDDD",
		yValueFormatString: "#0.0 Hours",
		dataPoints: [
			{ x: new Date(2017, 6, 3),  y: [4, 6, 8, 9, 7] },
			{ x: new Date(2017, 6, 4),  y: [5, 6, 7, 8, 6.5] },
			{ x: new Date(2017, 6, 5),  y: [4, 5, 7, 8, 6.5] },
			{ x: new Date(2017, 6, 6),  y: [3, 5, 6, 9, 5.5] },
			{ x: new Date(2017, 6, 7),  y: [6, 8, 10, 11, 8.5] },
			{ x: new Date(2017, 6, 8),  y: [5, 7, 9, 12, 7.5] },
			{ x: new Date(2017, 6, 9),  y: [4, 6, 8, 9, 7] }
		]
	}]
}

</script>

<style scoped>

</style>
