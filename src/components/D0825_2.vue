<template>
        <h1>if문</h1>
        <h2 style="color: red;">if문</h2>
        <p v-if="stock">v-if =""true/false 값</p>
        <p v-else>false값</p>
        <hr>
        <p v-if="count > 0">v-if = ""숫자비교로 true/false값</p>
        <p v-else>false</p>
        <hr>
        <h3 style="color: red;">v-else-if사용</h3>
        <p v-if="count2 > 3">변수값이 3보다 큼</p>
        <p v-else-if="count2 > 0">변수값이 2보다 큼</p>
        <p v-else-if="count2 == 0">변수값이 0임</p>
        <p v-else>변수값이 0보다 작음</p>
        <hr>
        <h3 style="color: red;">특정 글자의 포함여부를 찾는 if / else</h3>
        <p v-if="text.includes('coffee')">"coffee" 글자가 포함됨</p>
        <p v-else>"coffee 글자가 포함되지 않음"</p>
        <hr>
        <h3 style="color: red;">태그안에 여러 태그를 만들땐 div로 감싸기</h3>
        <div v-if="text2.includes('커피')"><p>커피</p>
        <img src="../assets/coffee.avif" alt="커피">
    </div>
    <p v-else>커피 없음</p>
</template>

<script setup>
import { ref } from 'vue';

const stock = ref(true)
const count = ref(3)
const count2 = ref(-1)

const text = ref("I like taco, pizza, Thai beef salad, coffee,  pho soup and tagine.")
const text2 = ref("I like taco, pizza, Thai beef salad, 커피coffee,  pho soup and tagine.")
</script>

<style scoped>
img {width: 150px;
height: 150px;
box-shadow: 5px 5px 5px 5px;
border-radius: 150px;}
</style>