<template>
    <div>
        <h3>원하는 일차 클릭</h3>
        <!-- <button @click="activeComp = 'Day1'">1일차</button>
        <button @click="activeComp = 'Day2'">2일차</button>
        <button @click="activeComp = 'Day3'">3일차</button> -->
        <button @click="activeComp = 'Day1'">1일차</button>
        <button @click="activeComp = 'Day2'">2일차</button>
        <button @click="activeComp = 'Day3'">3일차</button>
        <button @click="activeComp = 'Day4'">4일차</button>


  <div class="page-view">
   <KeepAlive>
       <component :is = "pages[activeComp]"></component>
   </KeepAlive>
 </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Day4 from '../components/day04_0827/Day4.vue';
import Day3 from '../components/day03_0826/Day3.vue';
import Day2 from '../components/day02_0825/Day2.vue';
import Day1 from '../components/day01_0822/Day1.vue';



const pages = {Day1 ,Day2 ,Day3 ,Day4}
const activeComp = ref('')
</script>

<style scoped>
.page-view{
  margin: 20px;
  filter: drop-shadow(5px 7px 5px gray);
  border: 3px double black;
  box-shadow: 5px 5px 5px 5px gray;
  font-weight: bold;
  background: radial-gradient(rgb(255, 255, 255), #eecaca);
}
button{
  box-shadow: 3px 3px 3px 3px navy;
  background-color: lightblue;
  margin: 5px;
  cursor: grab;
  font-weight: bold;
  border: 3px dashed rgba(204, 179, 38, 0.712);
}
</style>