<script setup>
import { ref } from 'vue';
import D0825_1 from './components/D0825_1.vue';
import D0825_2 from './components/D0825_2.vue';
import D0825_3 from './components/D0825_3.vue';
import D0826_for from './components/D0826_for.vue';
import D0826_event from './components/D0826_event.vue';
import KirbyPage from './KirbyPage.vue';



// 2일차 0825 
const showKirbyPage = ref(false);

const pages = {D0825_1, D0825_2, D0825_3}
const activeComp = ref("")
// 3일차 0826
const pages2 = {D0826_for, D0826_event}
</script>

<template>
   <div v-if="!showKirbyPage" class="gaegu-korean" >
    <button @click="showKirbyPage = true" class="naerumi">내루미 버전으로 보기</button>
  <!-- <D0825_1 />
  <D0825_2 />
  <D0825_3 /> -->
  <h2 style="text-align: center;">0825_vue 2일차</h2>
  <button @click="activeComp = 'D0825_1'">bind_바인드</button>
  <button @click="activeComp = 'D0825_2'">if_이프</button>
  <button @click="activeComp = 'D0825_3'">show_쇼우</button>
  <div id="comp_view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
  <hr>
  <!-- 3일차 -->
  <h2 style="text-align: center;">0826_vue 3일차</h2>
  <button @click="activeComp = 'D0826_for'">for_</button>
  <button @click="activeComp = 'D0826_event'">event_이벤트</button>
  <div id="comp_view">
    <KeepAlive>
      <component :is="pages2[activeComp]"></component>
    </KeepAlive>
  </div>
</div>
<KirbyPage v-else />
</template>

<style>
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
.single-day-english {
  font-family: "Single Day", cursive;
  font-weight: 400;
  font-style: normal;
}
.gaegu-korean {
  font-family: "Gaegu", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 150%;
}
.naerumi {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0.4em 0.8em;
  font-size: 0.8em;
  z-index: 1000;
}
body{
  background: radial-gradient(circle, white, rgb(226, 159, 226));
}

</style>
