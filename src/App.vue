<script setup>
import { ref } from 'vue';
import D0825_1 from './components/D0825_1.vue';
import D0825_2 from './components/D0825_2.vue';
import D0825_3 from './components/D0825_3.vue';
import D0826_for from './components/D0826_for.vue';
import D0826_event from './components/D0826_event.vue';
import KirbyPage from './KirbyPage.vue';
import D0827_methods from './components/D0827_methods.vue';
import D0827_model from './components/D0827_model.vue';
import D0827_eModifiers from './components/D0827_eModifiers.vue';
import D0827_computed from './components/D0827_computed.vue';
import D0827_watchers from './components/D0827_watchers.vue';
import D0827_form from './components/D0827_form.vue';



// 2일차 0825 
const showKirbyPage = ref(false);

const pages = {D0825_1, D0825_2, D0825_3}
const activeComp = ref("")
// 3일차 0826
const pages2 = {D0826_for, D0826_event}
// 4일차 0827
const pages3 = {D0827_methods, D0827_model, D0827_eModifiers, D0827_computed, D0827_watchers, D0827_form}
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
  <hr>
  <!-- 4일차 -->
    <h2 style="text-align: center;">0827_vue 4일차</h2>
  <button @click="activeComp = 'D0827_methods'">methods 메소드 구현</button>
  <button @click="activeComp = 'D0827_model'">model 양방향 바인딩</button>
  <button @click="activeComp = 'D0827_eModifiers'">이벤트 수정자</button>
  <button @click="activeComp = 'D0827_computed'">계산된 코드</button>
  <button @click="activeComp = 'D0827_watchers'">데이터 값 변경시, 감시자가 실행</button>
  <button @click="activeComp = 'D0827_form'">폼</button>

  <div id="comp_view">
    <KeepAlive>
      <component :is="pages3[activeComp]"></component>
    </KeepAlive>
  </div>
</div>
<KirbyPage v-else />
</template>

<style>
  button{
    margin: 5px;
    filter: drop-shadow(5px 5px 5px rgb(100, 9, 247));
    cursor: grab;
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

/* 두번째 css */
/* .page-view{
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
} */
</style>
