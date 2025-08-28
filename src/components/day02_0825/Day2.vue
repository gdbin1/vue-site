<template>
    
 <button @click="activeComp = 'D_bind'">v-bind</button>
 <button @click="activeComp = 'D_if'">v-if</button>
 <button @click="activeComp = 'D_show'">v-show</button>
 <button @click="activeComp = 'D_for'">v-for</button>

 <div class="page-view">
   <KeepAlive>
       <component :is = "pages[activeComp]"></component>
   </KeepAlive>
 </div>
</template>

<script setup>
import { ref } from 'vue';
import D_bind from './D_bind.vue';
import D_if from './D_if.vue';
import D_show from './D_show.vue';
import D_for from './D_for.vue';


const pages = {D_bind, D_if, D_show, D_for}
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