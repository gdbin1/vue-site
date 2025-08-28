<script setup>
import { reactive, ref } from 'vue';



const counter = reactive({count: 0})

const message = ref('안녕 Vue!')

const titleClass = ref('title')

const count = ref(0)
function increment() {
    count.value ++
}

const text = ref('')
function onInput(e) {
    text.value = e.target.value
}
</script>

<template>
    <h1>{{ message }}</h1>
    <p>숫자 세기: {{ counter.count }}</p>
    <hr>
    <h1 :class="titleClass">보라색</h1>
    <hr>
    <button @click="increment">숫자 세기: {{ count }}</button>
    <hr>
    <input :value="text" @input="onInput" placeholder="여기 입력">
    <p>{{ text }}</p>
</template>

<style>
.title{
    color: purple;
}

</style>