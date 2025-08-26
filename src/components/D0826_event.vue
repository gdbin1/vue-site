<template>
    <h2 style="color: red;">vue_event</h2>
    <p>버튼 카운트</p>
    <button v-on:click="count++">1씩 증가버튼 카운트: {{ count }}</button>
    <hr>
    <!-- 온오프로 이미지 바꾸기 -->
    <img :src="rengoku ? rengo1_1 : rengo2" alt="렌고쿠">
    <button @click="rengoku = !rengoku">렌고쿠 오의 on/off</button>
    <hr>
    <p>키 입력 횟수 세기</p>
    <div>
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}번 키 누름</p>
    </div>
    <hr>
    <p>색상값 온마우스</p>
    <div @mousemove="colorVal = Math.floor(Math.random() * 360)"
    :style="{backgroundColor: `hsl(${colorVal}, 60%, 60%)`}">
    {{ colorVal }}
    </div>
    <hr>
    <p>메뉴판</p>
    <div class="menu">
        <ol>
            <li v-for="food in foods_assets"
            @click="imgUrl = food.src">
        {{ food.name }}
            </li>
        </ol>
        <img :src="imgUrl" alt="food.name">
    </div>
    <div class="enter"></div>
</template>

<script setup>
import { ref } from 'vue';
import rengo1_1 from '../assets/rengo1_1.jpg'
import rengo2 from '../assets/rengo2.jpg'

import ceobi from '../assets/ceobi.jpg'

import img_burrito from '../assets/foods/img_burrito.svg'
import img_cake from '../assets/foods/img_cake.svg'
import img_fish from '../assets/foods/img_fish.svg'
import img_pizza from '../assets/foods/img_pizza.svg'
import img_rice from '../assets/foods/img_rice.svg'
import img_salad from '../assets/foods/img_salad.svg'
import img_soup from '../assets/foods/img_soup.svg'



const count =ref(0)
const rengoku = ref(true)
const inpCount = ref(0)
const colorVal = ref(50)
const foods_assets = ref(
    [{name:'부리또', src:img_burrito},
    {name:'샐러드', src:img_salad},
    {name:'케이크', src:img_cake},
    {name:'스프', src:img_soup},
    {name:'생선', src:img_fish},
    {name:'피자', src:img_pizza},
    {name:'밥', src:img_rice}
    ]
)
const imgUrl = ref(ceobi)
</script>

<style scoped>
img{
    width: 150px;
    height: 150px;
}
.bg{
    width: 200px;
    height: 50px;
    background-color: burlywood;
    border: 2px dashed rgb(192, 85, 85);
    margin: 10px;
}
.menu > ol{
    width: 80px;
    float: left;
}
.menu li:hover{
    background-color: lightgray;
    box-shadow: 5px 5px 5px;
    cursor: grab;
}
.menu > img{
    width: 200px;
    height: 200px;
}
.temp-bg{
    height: 100%;
}
.enter{
    clear: both;
}
</style>