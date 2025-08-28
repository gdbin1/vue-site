<template>
    <div class="bg">
        <div class="b1">
        <!-- 양방향 바인딩 -->
        <input type="text" v-model="inpText">
        <p>입력한 글자: {{ inpText }}</p>
        </div>
    </div>
        <!-- 체크박스 true false 값 -->
    <div class="bg">
        <div class="b2">
            <p>중요한가요?
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>
        </div>
    </div>
    <div class="bg">
        <div class="b3">
            <!-- shoppingList 입력담당 -->
            <form @submit.prevent="addItem">
                <p>
                    구매목록? 
                    <input type="text" v-model="itemName" 
                    required placeholder="목록 이름을 입력하세요"></p>
                <p>
                    구매갯수?
                    <input type="number" v-model="itemNumber"
                    required placeholder="구매 갯수를 입력하세요">
                </p>
                <p>
                    <label>
                    얼마나 중요한가요?
                    <input type="checkbox" v-model="itemImportant">
                    {{ itemImportant }}
                    </label>
                </p>
                <button type="submit">목록 추가하기</button>
            </form>
            <hr>
            <!-- shoppingList 출력담당 -->
            <p><strong>--- 구매 목록 ---</strong></p>
            <ol>
                <li v-for="list in shoppingList">
                        목록: {{ list.name }}
                        갯수: {{ list.number }}
                        중요도: {{ list.important }}
                </li>
            </ol>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

// 양방향 바인딩
const inpText = ref('Initial text')
// true false 체크박스
const important = ref(false)


// 쇼핑 리스트 만들기
// 쇼핑 목록------------
const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const addItem =() =>{
    let item = {
        name:itemName.value,
        num:itemNumber.value,
        important:itemImportant.value
    }
    shoppingList.value.push(item)
}
    // 목록 init
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
const shoppingList = ref(
    [
         { name: '토마토', number: 5, important: false },
         { name: '바나나', number: 3, important: true }
    ]
)
// --------------
</script>

<style scoped>
.bg{
    /* height: 100%; */
    margin: 10px;
    border-bottom: 3px double purple;
}
.b1{
    width: 200px;
    height: 100px;
    display: inline-block;
    background-color: rgb(255, 215, 163);
    border: 3px dashed brown;
}
.b2{
    width: 200px;
    height: 100px;
    display: inline-block;
    background-color: rgb(255, 215, 163);
    border: 3px dashed brown;
}
.b3{
    width: 400px;
    /* height: 100px; */
    display: inline-block;
    background-color: rgb(255, 215, 163);
    border: 3px dashed brown;
}
.b3 li{
    border-bottom: 2px dotted black;
}
</style>