<script lang="ts">
export default {
  data() {
    return {
	  chart: null,
	  options: {
	    animationEnabled: true,
	    title:{
	      text: "Vue.js Basic Column Chart"
	    },
	    data: [{
		  type: "column",
		  dataPoints: [
		    { label: "apple",  y: 10 },
		    { label: "orange", y: 15 },
		    { label: "banana", y: 25 },
		    { label: "mango",  y: 30 },
		    { label: "grape",  y: 28 }
		  ]
	    }]
	  }
    }
  }
}
</script>

<template>
<div>
	<CanvasJSChart :options="options" class="custom"/>
</div>
</template>

<style>
	.custom{
		background: green;
	}
</style>
