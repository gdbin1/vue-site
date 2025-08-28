<template>
    <div class="temp-bg">
    <button v-on:click="count++">++1 증가 버튼 카운트: {{ count }}</button>
    <hr>
    <!-- 전구 불 -->
    <img :src="lightOn ? turnon : turnoff" alt="꺼짐">
    <button @click="lightOn = !lightOn">ON/OFF 버튼 {{ lightOn }}</button>
    <hr>
    <!-- 키입력 -->
     <div>
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}번째 키를 다운하고 있음</p>
     </div>
    <hr>
    <!-- 색상값 온마우스 -->
    <div class="bg"
    @mousemove="colorVal = Math.floor(Math.random()*360)"
    :style="{backgroundColor: `hsl(${colorVal}, 60%, 60%)`}">
        {{ colorVal }}
    </div>
    <hr>
    <!-- 메뉴판 -->
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
</div>
</template>

<script setup>
import { ref } from 'vue';

import turnoff from "../../assets/./foods/turnoff.gif"
import turnon from "../../assets/./foods/turnon.gif"

import img_burrito from '../../assets/./foods/img_burrito.svg'
import img_cake from '../../assets/./foods/img_cake.svg'
import img_fish from '../../assets/./foods/img_fish.svg'
import img_pizza from '../../assets/./foods/img_pizza.svg'
import img_rice from '../../assets/./foods/img_rice.svg'
import img_salad from '../../assets/./foods/img_salad.svg'
import img_soup from '../../assets/./foods/img_soup.svg'

const count = ref(0)
// 전구불을 켜고 끄는 토글버튼
const lightOn = ref(false)

// 키 입력시에 카운트를 증가
const inpCount = ref(0)

// 색상값 온마우스
const colorVal = ref(50)

// 메뉴판
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
const imgUrl = ref(img_burrito)
</script>

<style scoped>
.bg{
    width: 200px;
    height: 50px;
    background-color: burlywood;
    border: 2px dashed rgb(192, 85, 85);
    margin: 10px;
}
img{
    width: 100px;
    height: 100px;
}
.menu > ol{
    width: 80px;
    float: left;
}
.menu li:hover{
    background-color: brown;
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
/* .gb{border: 2px solid black;
    display: inline-block;
    margin: 10px;
    font-weight: bold;
    box-shadow: 5px 5px 5px;
    border-radius: 15px;
    }
.gb li:hover{
    background-color: gray;
} */
</style>