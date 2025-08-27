<template>
    <div>
        <input type="range" min="0" max="100" step="1" v-model="rangeVal">
        <p>현재값: {{ rangeVal }}</p>
        <dd>초기값:70지정 / 21~39 => 20으로보냄 / 40~59 => 60으로보냄</dd>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

    const rangeVal = ref(70)

    watch(rangeVal, (val) => {
        if (val > 20 && val < 40){
            rangeVal.value = 20
        }else if (val >= 40 && val < 60){
            rangeVal.value = 60
        }
    })
</script>

<style scoped>

</style>