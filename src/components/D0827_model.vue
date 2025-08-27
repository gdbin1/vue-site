<template>
    <div class="bg">
        <div class="bg1">
            <input type="text" v-model="inpText">
            입력한 글자: {{ inpText }}
        </div>
    </div>
    <div class="bg">
        <div class="bg2">
            <p>[체크박스] 중요한가?
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>
        </div>
    </div>
    <div class="bg">
        <div class="bg3">
            <h2>쇼핑리스트 만들기</h2>
            <form @submit.prevent="addItem">
                <p>구매목록
                    <input type="text" v-model="itemName"
                    required placeholder="목록 이름 입력하세요">
                </p>
                <p>구매갯수
                    <input type="number" v-model="itemNumber"
                    required placeholder="구매 수량을 입력하세요">
                </p>
                <p>
                    <label>
                        중요도 여부
                        <input type="checkbox" v-model="itemImportant">
                        {{ itemImportant }}
                    </label>
                </p>
                <button type="submit">목록 추가하기</button>
            </form>
            <p><strong>--- 구매 목록 ---</strong></p>
            <ul>
                <li v-for="list in shoppingList">
                    목록: {{ list.name }}
                    갯수: {{ list.number }}
                    중요도: {{ list.important }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inpText = ref('양방향 바인딩')
const important = ref(false)

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const addItem = () => {
    const item = {
        name:itemName.value,
        number:itemNumber.value,
        important:itemImportant.value
    }
    shoppingList.value.push(item)
}
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false

const shoppingList = ref(
    [
        {name:'토마토', number:5, important: false}
    ]
)
</script>

<style scoped>
.bg{
    margin: 10px;
    border-bottom: 3px double purple;
}
.bg1{
    width: auto;
    height: 100px;
    display: inline-block;
}
.bg2{
    width: auto;
    height: 100px;
    display: inline-block;
}
</style>