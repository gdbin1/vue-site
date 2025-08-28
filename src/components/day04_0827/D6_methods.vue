<template>
    <div class="bg">
        <div class="b1" @click="changeText" style="border: 3px dashed brown;">
        <p>{{ txt }}</p>
        </div>
    </div>
     <div class="bg">
        <div class="b2" @mousemove="mousePos" style="border: 3px dashed brown;">
            <span>xPos: {{ xPos }} --- yPos: {{ yPos }}</span>
        </div>
    </div>
    
     <div class="bg">
        <div class="b3" style="border: 3px dashed brown;">
            <p>카운트: {{ count }}</p>
            <button @click="addCount(1)">++1증가</button>
            <button @click="addCount(5)">++5증가</button>
            <button @click="addCount(-1)">--1감소</button>
        </div>
    </div>
    <div class="bg">
        <div class="b4">
          <img id="호랑이" @click="myMethod($event, '멍멍')"
          :src="img_tiger_square" 
          alt="img_tiger_square">
          <p>{{ msgAndId }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img_tiger_square from '../../assets/./foods/img_tiger_square.jpeg'

// react에선 set함수명을 썻지만, vue에선 .value 사용 -> txt(함수명).value
    const txt = ref('test') 
    function changeText(){
        txt.value = '---뿅---'
    }
    // -------------
    const xPos = ref(0)
    const yPos = ref(0)
    const mousePos = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
    }
    // ----------------
    const count = ref(0)
    const addCount = (num) => {
    count.value += num
    }
    // ----------------
    const msgAndId = ref('')
    // myMethod($event, '멍멍')
    const myMethod = (e,msg) => {
    // msgAndId.value = msg
    // msgAndId.value += e.target.id
    msgAndId.value = `${e.target.id}야 짖어봐 ${msg}`
    }

</script>

<style scoped>
.bg{
margin: 10px;
border-bottom: 3px double purple;
}
.b1{
    width: 200px;
    height: 100px;
    display: inline-block;
    background-color: rgb(255, 215, 163);
}
.b2{
    width: 200px;
    height: 200px;
    display: inline-block;
    background-color: rgb(255, 215, 163);
}
.b4 > img{
    width: 200px;
    height: 200px;
}
</style>