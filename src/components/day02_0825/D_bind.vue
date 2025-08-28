<template>
  <!--이미지 import 사용 -->
  <img v-bind:src="img_beach3" alt="img_beach3" />
  <hr />

  <!-- v-bind:style 사용 -->
  <div v-bind:style="{ fontSize: size }">
    너는 v-bind:글자크기 속성이야</div>
  <div v-bind:style="{ fontSize: size2 + 'px' }">
    너는 v-bind:글자값 속성이야
  </div>
  <div v-bind:style="{ 'font-size': size3 + 'px' }">
    너는 css 글자속성</div>
  <hr />
  <!-- v-bind:style 색상값 -->
  <div v-bind:style="{ backgroundColor: `rgb(${bgVal},100, 100)` }">
    백그라운드 색상값을 변수backgroungColor:`rgb(${bgVal},100, 100)로 적용
  </div>
  <div
    v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }"
  >
    백그라운드 색상값을 조건에 backgroundColor: isImportant ? 'lightcoral' :
    'lightgray'따라 다르게
  </div>
  <!-- v-bind로 class설정해서 만들기 / v-bind는 생략 가능 ex) <div :class="{class명}"> -->
  <div v-bind:class="className">
    클래스 바인드</div>  <br>
  <div v-bind:class="{myClass: true}">
    클래스 true false 바인드</div> <br>
  <div :class="{myClass:isImportant}">
    클래스 important속성 여부</div> <br>  
</template>

<script setup>
import { ref } from "vue";
import img_beach3 from "../../assets/./foods/img_beach3.jpg";
const size = ref("20px");
const size2 = ref(30);
const size3 = ref(40);
const bgVal = ref(180);
const isImportant = ref(true);
const className = ref('impClass')
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.impClass{
    background-color: burlywood;
    border: 3px dashed brown;
    box-shadow: 5px 5px 5px 5px;
}
.myClass {
    background-color: pink;
}
</style>
