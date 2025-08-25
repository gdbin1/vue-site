<template>
    <div>
        <h1>if문</h1>
        <h2 style="color: red;">if문</h2>
        <p v-if="stock">v-if =""true/false 값</p>
        <p v-else>false값</p>
        <hr>
        <p v-if="count > 0">v-if = ""숫자비교로 true/false값</p>
        <p v-else>false</p>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const stock = ref(true)
const count = ref(3)
</script>

<style scoped>

</style>