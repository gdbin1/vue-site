<template>
  <p v-if="typewritersInStock">재고 있음</p>
  <p v-else>재고 없음</p>
  <hr />
  <p v-if="typewritersCount > 0">재고 있음</p>
  <p v-else>재고 없음</p>
  <hr />
  <p v-if="typewritersCount2 > 3">재고 있음</p>
  <p v-else-if="typewritersCount2 > 0">few재고가 좀 남음</p>
  <p v-else-if="typewritersCount2 == 0">재고 없음</p>
  <p v-else>선불(예약 있음) >> ({{ typewritersCount2 }})</p>
  <hr>
  <p v-if="text.includes('pizza')">"pizza" 글자가 포함되어 있어요</p>
  <p v-else>"pizza" 글자 포함 없음</p>
  <hr>
  <div v-if="text2.includes('피자')">
    <p>피자</p>
    <img src="../../assets/img_pizza.svg" alt="피자이미지">
  </div>
  <p v-else>피자 없음</p>

</template>

<script setup>
import { ref } from "vue";

const typewritersInStock = ref(false);
const typewritersCount = ref(3);
const typewritersCount2 = ref(-1);

const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine.")
const text2 = ref("I like taco, 피자pizza, Thai beef salad, pho soup and tagine.")
</script>

<style scoped>
img{
    width: 100px;
    height: 100px;
    box-shadow: 10px 10px 10px 10px;
}
</style>
