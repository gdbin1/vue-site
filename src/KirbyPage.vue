<script setup>
import { ref } from 'vue';
import D0825_1 from './components/D0825_1.vue';
import D0825_2 from './components/D0825_2.vue';
import D0825_3 from './components/D0825_3.vue';
import D0826_for from './components/D0826_for.vue';
import D0826_event from './components/D0826_event.vue';

// 모든 컴포넌트를 하나의 객체로 합칩니다.
const pages = {
  D0825_1,
  D0825_2,
  D0825_3,
  D0826_for,
  D0826_event
};

const activeComp = ref('');
</script>

<template>
  <div class="gaegu-korean">
    <div class="kirby-container">
      <div class="kirby-mouth-wrapper">
        <div class="kirby-mouth-content">
          <h2 style="text-align: center;">0825_vue 2일차</h2>
          <button @click="activeComp = 'D0825_1'">bind_바인드</button>
          <button @click="activeComp = 'D0825_2'">if_이프</button>
          <button @click="activeComp = 'D0825_3'">show_쇼우</button>
          <hr>
          <h2 style="text-align: center;">0826_vue 3일차</h2>
          <button @click="activeComp = 'D0826_for'">for_</button>
          <button @click="activeComp = 'D0826_event'">event_이프</button>
          
          <div id="comp_view">
            <KeepAlive>
              <component :is="pages[activeComp]"></component>
            </KeepAlive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 폰트 설정 (기존과 동일) */
.gaegu-korean {
  font-family: "Gaegu", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 150%;
}

/* --- 최종 스타일 --- */

/* 커비와 입을 포함하는 전체 컨테이너 */
.kirby-container {
  /* 이미지를 위쪽으로 배치합니다. */
  background: url('./assets/naerumi.jpg') no-repeat center top;
  background-size: contain;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 커비 입 모양을 만드는 컨테이너 */
.kirby-mouth-wrapper {
  background-color: pink;
  width: 40%;
  height: 100%; /* 입의 높이를 조절합니다. */
  border-radius: 50% 50% 50% 50% / 50px 50px 180px 180px;
  box-shadow: inset 0 10px 15px rgba(0, 0, 0, 0.2);
  transform: rotate(2deg);
  /* 입의 위치를 아래로 조절합니다. 이 값을 변경해보세요. */
  margin-top: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 입 안쪽의 콘텐츠 스타일 */
.kirby-mouth-content {
  width: 90%;
  padding-top: 400px; /* 내부 콘텐츠를 아래로 내립니다. 이 값을 변경해보세요. */
  padding-bottom: 20px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

/* 기존 버튼 및 컴포넌트 뷰 스타일 (유지) */
button {
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