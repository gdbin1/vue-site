<template>
    <div>
        <label>
            <input type="checkbox" v-model="chbxVal">
            <p>체크하면 글자 바뀜 ->{{ isImportant }}</p>
        </label>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const chbxVal = ref(false)
const isImportant = computed(
    () => {
        if (chbxVal.value){
            return "중요함"
        } else{
            return "평범함"
        }
    }
)
</script>

<style scoped>

</style>