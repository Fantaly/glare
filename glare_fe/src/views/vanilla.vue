<template>
    <div id="chartContainer"></div>
</template>

<script setup lang="ts">
import CanvasJSvan from '@canvasjs/charts';

const chart = new CanvasJSvan.Chart("container", {
  //Chart Options - Check https://canvasjs.com/docs/charts/chart-options/
  title:{
    text: "Basic Column Chart in JavaScript"              
  },
  data: [{
    type: "column",
    dataPoints: [
      { label: "apple",  y: 10  },
      { label: "orange", y: 15  },
      { label: "banana", y: 25  },
      { label: "mango",  y: 30  },
      { label: "grape",  y: 28  }
    ]
  }]
});
//Render Chart
chart.render();
</script>

<style scoped>

</style>