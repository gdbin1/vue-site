<template>
    <h1>v-show (요소는 존재하지만, 보이고/감추고)</h1>
    <div v-show="showDiv">이거 감출수 있음 (false값으로하면 숨김)</div>
    <hr>
    <h3 style="color: red;">if와 show 비교</h3>
    <p>if와 show 비교하기</p>
    <div v-show="showDiv">div 태그를 보이게/감추게 함</div>
    <div v-if="showDiv">div 태그를 요소생성/생성x 함</div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
</script>

<style scoped>
div{
    padding: 20px;
    margin: 10px;
    display: inline-block;
    font-weight: bold;
    border: 1px solid black;
}
</style>