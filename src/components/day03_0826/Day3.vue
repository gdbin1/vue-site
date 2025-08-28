<template>
    
 <button @click="activeComp = 'D1_bind'">v-bind 변수 사용하겠다</button>
 <button @click="activeComp = 'D2_if'">v-if 조건 분기</button>
 <button @click="activeComp = 'D3_show'">v-show 보이다/감추다</button>
 <button @click="activeComp = 'D4_for'">v-for ~동안 실행하다</button>
 <button @click="activeComp = 'D5_event'">v-event 이벤트 발생</button>

 <div class="page-view">
   <KeepAlive>
       <component :is = "pages[activeComp]"></component>
   </KeepAlive>
 </div>
    
</template>

<script setup>
import { ref } from 'vue';
import D1_bind from './D1_bind.vue';
import D2_if from './D2_if.vue';
import D3_show from './D3_show.vue';
import D4_for from './D4_for.vue';
import D5_event from '../day04_0827/D5_event.vue';




const pages = {D1_bind, D2_if, D3_show, D4_for, D5_event}
const activeComp = ref('')
</script>

<style scoped>
/* .page-view{
  margin: 20px;
  filter: drop-shadow(5px 7px 5px gray);
  border: 3px double black;
  box-shadow: 5px 5px 5px 5px gray;
} */
.page-view{
  margin: 20px;
  filter: drop-shadow(5px 7px 5px gray);
  border: 3px double black;
  box-shadow: 5px 5px 5px 5px gray;
  font-weight: bold;
  background: radial-gradient(rgb(255, 255, 255), #c8abff);
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