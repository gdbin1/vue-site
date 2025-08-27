<template>
    <div class="bg">
        <div class="bg1" @click="changeText" style="border:3px dashed purple;">
            <p>{{txt}}</p>
        </div>
    </div>
    <div class="bg">
        <div class="bg2" @mousemove="mousePos" style="border:3px dashed purple;">
            <span>xPos: {{ xPos }} --- yPos: {{ yPos }}</span>
        </div>
    </div>
    <div class="bg">
        <div class="bg3" style="border: 3px dashed purple;">
            <p>카운트: {{ count }}</p>
            <button @click="addCount(1)">+1 증가</button>
            <button @click="addCount(5)">5 증가</button>
            <button @click="addCount(-1)">-1감소</button>
        </div>
    </div>
    <div class="bg">
        <div>
            <p>이미지 클릭시 글자 출력</p>
            <img id="클릭" @click="myMethod($event, '!')" :src="conan" alt="코난">
            <p>{{ msgAndId }}</p>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import conan from '../assets/conan.jpg'

const txt=ref('클릭시 글자 바뀜')
function changeText(){
    txt.value = '짠'
}

const xPos = ref(0)
const yPos = ref(0)
const mousePos = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
}

const count = ref(0)
const addCount = (num) => {
    count.value += num
}

const msgAndId = ref('')
const myMethod = (e,msg) => {
    msgAndId.value = `${e.target.id} 했구나 ${msg}`
}
</script>

<style scoped>
.bg{
    margin: 10px;
    border-bottom: 3px double purple;
}
.bg1{
    width: 200px;
    height: 100px;
    display: inline-block;
}
.bg2{
    width: auto;
    height: 100px;
    display: inline-block;
}
button{
    width:auto;
    height: 50px;
}
img{
    width: 100px;
    height: 100px;
}
.bg4{
    width: auto;
    height: 100px;
    display: inline-block;
}
</style>