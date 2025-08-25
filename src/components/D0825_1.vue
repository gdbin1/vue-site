<template>
    <h2>v-bind  (v-bind 생략하고 : (colon) 사용)</h2>
    <h2 style="color: red;">v-bind:style</h2>
    <div :style="{fontSize: size}">
        v-bind: 글자 스기 속성
    </div>
    <div :style="{fontSize: size2 + 'px'}">
        v-bind 글자값 속성
    </div>
    <div :style="{'font-size' : size3 + 'px'}">css 글자속성</div>
    <hr>
    <h2 style="color: red;">v-bind:style 색상값</h2>
    <div :style="{backgroundColor: `rgb(${bgVal}, 100, 100)`}">
        배경색을 {backgroundColor: `rgb(${bgVal}, 100, 100)`}로 표현 (``백틱임)
    </div>
    <div :style="{backgroundColor: isImprotant ? 'lightblue' : 'lightgray'}">
        백그라운드 색을 true, false 값에 따라 다르게
    </div>
    <hr>
    <h2 style="color: red;">v-bind로 class 설정해서 만들기</h2>
    <div :class="classname">클래스 바인드</div>
    <div :class="{myclass: true}">클래스 바인드 true/false</div>
    <div :class="{myclass:isImprotant}">클래스 important속성 여부</div>
    <hr>
    <h2 style="color: red;">v-bind:src로 이미지 넣기</h2>
    <img v-bind:src='ren' alt="렌고쿠">
</template>

<script setup>
import { ref } from 'vue';
import ren from "../assets/ren.png"

const size = ref("20px")
const size2 = ref(30)
const size3 = ref(40)
const bgVal = ref(180)
const isImprotant = ref(true)
const classname = ref('impClass')
</script>

<style scoped>
.impClass{
    background-color: purple;
    border: 2px dashed black;
    box-shadow: 5px 5px 5px 5px;
}
.myclass{
    background-color: burlywood;
}
</style>