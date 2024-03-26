<template>
    <CanvasJSChart :options="options" class="custom"/>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from 'primevue/chart';


let data_1 = [
    generateData("sonno"),
    generateData("stmaco"),
    generateData("mestruazioni"),
    generateData("probiotici"),
  {
		type: "line",
		showInLegend: true,
		name: "ansia",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 650 },
			{ x: new Date(2017, 0, 4), y: 700 },
			{ x: new Date(2017, 0, 5), y: 710 },
			{ x: new Date(2017, 0, 6), y: 658 },
			{ x: new Date(2017, 0, 7), y: 734 },
			{ x: new Date(2017, 0, 8), y: 963 },
			{ x: new Date(2017, 0, 9), y: 847 },
			{ x: new Date(2017, 0, 10), y: 853 },
			{ x: new Date(2017, 0, 11), y: 869 },
			{ x: new Date(2017, 0, 12), y: 943 },
			{ x: new Date(2017, 0, 13), y: 970 },
			{ x: new Date(2017, 0, 14), y: 869 },
			{ x: new Date(2017, 0, 15), y: 890 },
			{ x: new Date(2017, 0, 16), y: 930 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "benessere",
		lineDashType: "dash",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 510 },
			{ x: new Date(2017, 0, 4), y: 560 },
			{ x: new Date(2017, 0, 5), y: 540 },
			{ x: new Date(2017, 0, 6), y: 558 },
			{ x: new Date(2017, 0, 7), y: 544 },
			{ x: new Date(2017, 0, 8), y: 693 },
			{ x: new Date(2017, 0, 9), y: 657 },
			{ x: new Date(2017, 0, 10), y: 663 },
			{ x: new Date(2017, 0, 11), y: 639 },
			{ x: new Date(2017, 0, 12), y: 673 },
			{ x: new Date(2017, 0, 13), y: 660 },
			{ x: new Date(2017, 0, 14), y: 562 },
			{ x: new Date(2017, 0, 15), y: 643 },
			{ x: new Date(2017, 0, 16), y: 570 }
		]
	}
]

let data_2 = [
    generateData("calcio"),
    generateData("vitamina b"),
    generateData("melatonina"),
    generateData("vitamina d"),
  {
		type: "line",
		showInLegend: true,
		name: "melatonina",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 650 },
			{ x: new Date(2017, 0, 4), y: 700 },
			{ x: new Date(2017, 0, 5), y: 710 },
			{ x: new Date(2017, 0, 6), y: 658 },
			{ x: new Date(2017, 0, 7), y: 734 },
			{ x: new Date(2017, 0, 8), y: 963 },
			{ x: new Date(2017, 0, 9), y: 847 },
			{ x: new Date(2017, 0, 10), y: 853 },
			{ x: new Date(2017, 0, 11), y: 869 },
			{ x: new Date(2017, 0, 12), y: 943 },
			{ x: new Date(2017, 0, 13), y: 970 },
			{ x: new Date(2017, 0, 14), y: 869 },
			{ x: new Date(2017, 0, 15), y: 890 },
			{ x: new Date(2017, 0, 16), y: 930 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "vitamina c",
		lineDashType: "dash",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 510 },
			{ x: new Date(2017, 0, 4), y: 560 },
			{ x: new Date(2017, 0, 5), y: 540 },
			{ x: new Date(2017, 0, 6), y: 558 },
			{ x: new Date(2017, 0, 7), y: 544 },
			{ x: new Date(2017, 0, 8), y: 693 },
			{ x: new Date(2017, 0, 9), y: 657 },
			{ x: new Date(2017, 0, 10), y: 663 },
			{ x: new Date(2017, 0, 11), y: 639 },
			{ x: new Date(2017, 0, 12), y: 673 },
			{ x: new Date(2017, 0, 13), y: 660 },
			{ x: new Date(2017, 0, 14), y: 562 },
			{ x: new Date(2017, 0, 15), y: 643 },
			{ x: new Date(2017, 0, 16), y: 570 }
		]
	}
]

let data = data_1;



function generateData(name){
  return {
		type: "line",
		showInLegend: true,
		name: name,
		xValueFormatString: "DD MMM, YYYY",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 4), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 5), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 6), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 7), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 8), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 9), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 10), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 11), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 12), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 13), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 14), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 15), y: 500 + Math.random()*100 },
			{ x: new Date(2017, 0, 16), y: 500 + Math.random()*100 }
		]
  }
}

const options = {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Previsione"
	},
	axisX:{
        title: "Index",
		valueFormatString: "MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Volume",
		includeZero: true,
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true
	},
  data: data
}
</script>

<style>
.grafico{
    
}
</style>
