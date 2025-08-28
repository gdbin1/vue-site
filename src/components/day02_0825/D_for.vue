<template>
    <div>
    <ol>
      <li v-for="x in manyFoods" :key="x">{{ x }}</li>
    </ol>
    </div>
    <div>
        <img v-for="x in manyfoods2" :key="x" :src="`./assets/${x}`">
    </div>
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../../assets/./foods/img_burrito.svg'
import img_salad from '../../assets/./foods/img_salad.svg'
import img_cake from '../../assets/./foods/img_cake.svg'
import img_soup from '../../assets/./foods/img_soup.svg'
import img_fish from '../../assets/./foods/img_fish.svg'
import img_pizza from '../../assets/./foods/img_pizza.svg'
import img_rice from '../../assets/./foods/img_rice.svg'
const manyFoods = ref([
  '부리또',
  '샐러드',
  '케이크',
  '스프',
  '생선',
  '피자',
  '밥'
]);
const manyfoods2 = ref([
    img_burrito,
    img_salad,
    img_cake,
    img_soup,
    img_fish,
    img_pizza,
    img_rice
])
</script>

<style scoped>
div {
  border: 1px solid black;
  width:100px;
  padding: 10%;
  display: flex;
  flex-wrap: wrap;
}
</style>