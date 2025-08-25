<script setup>
import { ref } from 'vue';
import D0825_1 from './components/D0825_1.vue';
import D0825_2 from './components/D0825_2.vue';
import D0825_3 from './components/D0825_3.vue';

const pages = {D0825_1, D0825_2, D0825_3}
const activeComp = ref("")
</script>

<template>
  <!-- <D0825_1 />
  <D0825_2 />
  <D0825_3 /> -->

  <button @click="activeComp = 'D0825_1'">bind_바인드</button>
  <button @click="activeComp = 'D0825_2'">if_이프</button>
  <button @click="activeComp = 'D0825_3'">show_쇼우</button>

  <div id="comp_view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
  button{
    margin: 5px;
    filter: drop-shadow(5px 5px 5px rgb(100, 9, 247));
  }
  #comp_view {
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px;
  }
</style>
