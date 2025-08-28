<template>
    <div>
<button @click="activeComp = 'D4_for'">v-for ~동안 실행하다</button>
<button @click="activeComp = 'D5_event'">v-on 이벤트 발생</button>
<button @click="activeComp = 'D6_methods'">methods 메소드 구현</button>
<button @click="activeComp = 'D7_model'">model 양방향 바인딩</button>
<button @click="activeComp = 'D8_computed'">computed 계산된 코드</button>
<button @click="activeComp = 'D9_watchers'">watchers 데이터 값이 변경시,감시자가 실행</button>
<button @click="activeComp = 'D10_form'">form</button>
<button @click="activeComp = 'D11_eModifiers'">이벤트 수정자</button>


  <div class="page-view">
   <KeepAlive>
       <component :is = "pages[activeComp]"></component>
   </KeepAlive>
 </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import D4_for from './D4_for.vue';
import D5_event from './D5_event.vue';
import D6_methods from './D6_methods.vue';
import D7_model from './D7_model.vue';
import D8_computed from './D8_computed.vue';
import D9_watchers from './D9_watchers.vue';
import D10_form from './D10_form.vue';
import D11_eModifiers from './D11_eModifiers.vue';


const pages = {D4_for, D5_event, D6_methods, D7_model, D8_computed, D9_watchers, D10_form, D11_eModifiers} 
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