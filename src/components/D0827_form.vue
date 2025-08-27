<template>
    <div>
        <label>
            <input @change="handleChange" v-model="selected" type="radio"
            id="r1" value="HTML" name="radioG">HTML
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio"
            id="r2" value="CSS" name="radioG">CSS
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio"
            id="r3" value="JS" name="radioG">JS
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio"
            id="r4" value="React" name="radioG">React
        </label>
         <label>
            <input @change="handleChange" v-model="selected" type="radio"
            id="r5" value="Vue" name="radioG">Vue
        </label>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const selected = ref('HTML')
const selectedId = ref('')
const handleChange = (e) => {
    selectedId.value = e.target.id
}
</script>

<style scoped>

</style>