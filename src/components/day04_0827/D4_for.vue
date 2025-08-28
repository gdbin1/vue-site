<template>
    <div>
        <ol>
            <li v-for="food in myFoods">{{ food }}</li>
        </ol>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const myFoods = ref(
    [
        '부리또',
        '샐러드',
        '케이크',
        '스프',
        '생선',
        '피자',
        '밥'
    ]   
)
</script>

<style scoped>

</style>