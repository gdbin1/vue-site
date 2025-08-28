<template>
    <div>
        <input type="range" min="0" max="100" step="1" v-model="rangeVal">
        <p>현재 값: {{ rangeVal }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

    const rangeVal = ref(70)
    // watch(감시할변수, (구현부))

    watch(rangeVal, (val) => {
        if (val > 20 && val < 40) {
            // 21~39 => 20으로 보내기
         rangeVal.value = 20
        }else if(
            val >= 40 && val < 60){
            // 40~59 => 60으로 보내기
                rangeVal.value = 60
            }
    })
</script>

<style scoped>

</style>