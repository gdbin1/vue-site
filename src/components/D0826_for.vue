<template>
    <h2 style="color: red;">for문</h2>
    <ul>
        <li v-for="item in items">{{ item.message }}</li>
    </ul>
    <hr>
    <ul>
        <li v-for="food in manyfoods">메뉴:{{ food }}</li>
    </ul>
    <hr>
    <p>assets로 가져옴</p>
    <div class="foodstyle" v-for="food in foods_assets">
        <li><img :src="food.src" alt="food.name"></img>
        ->메뉴명 : {{ food.name }}</li>
    </div>
    <hr>
    <p>public 가져옴</p>
    <div class="foodstyle2" v-for="food in foods_public" :key="food.name">
        <img :src="food.src" alt="public">
        <li>{{ food.name }}</li>
    </div>
    <hr>
    <p>index 가져오기</p>
    <li v-for="(food, index) in manyfoods">{{ index }}번 {{ food }}</li>
    
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../assets/foods/img_burrito.svg'
import img_cake from '../assets/foods/img_cake.svg'
import img_fish from '../assets/foods/img_fish.svg'
import img_pizza from '../assets/foods/img_pizza.svg'
import img_rice from '../assets/foods/img_rice.svg'
import img_salad from '../assets/foods/img_salad.svg'
import img_soup from '../assets/foods/img_soup.svg'

const items = ref([{message: 'Foo'}, {message: '+'}, {message: 'Bar'},
    {message: '+'}, {message: 'O'}, {message: '='}, {message:'푸바오'}])

const manyfoods = ref([
    '부리또',
    '샐러드',
    '케이크',
    '스프',
    '생선',
    '피자',
])

const foods_assets = ref(
    [{name:'부리또',src:img_burrito},
    {name:'샐러드',src:img_salad},
    {name:'케이크',src:img_cake},
    {name:'스프',src:img_soup},
    {name:'생선',src:img_fish},
    {name:'피자',src:img_pizza},
    {name:'밥',src:img_rice},

    ]
)
const foods_public = ref(
    [   {name:'부리또', src:"/images/img_burrito.svg"},
        {name:'샐러드', src:"/images/img_salad.svg"},
        {name:'케이크', src:"/images/img_cake.svg"},
        {name:'스프', src:"/images/img_soup.svg"},
        {name:'생선', src:"/images/img_fish.svg"},
        {name:'피자', src:"/images/img_pizza.svg"},
        {name:'밥', src:"/images/img_rice.svg"}
    ]
)
</script>

<style scoped>
img {
    width: 100px;
    height: 100px;
}
.foodstyle{
        border: 3px solid black;
        display: inline-block;
        font-weight: bold;
        margin: 3px;
        border-radius: 10px;
        background: linear-gradient(to right, #ffffff 0%, #ff99ff 100%);
}
li{
        list-style-type: square;
        font-weight: bold;
}
.foodstyle2{
        border: 3px solid black;
        display: inline-block;
        font-weight: bold;
        margin: 3px;
        border-radius: 10px;
        background: linear-gradient(to right, #ffffff 0%, #d14e2d 100%);
        border-collapse: collapse;
}
</style>