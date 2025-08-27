<template>
    <div class="bg">
        <div class="bg1">
        <p>자습 w3에 있는 이벤트 수정자</p>
        <button @click.once="createAlert">alert 띄우는 창 버튼</button>
        </div>
    </div>
    <div class="bg">
        <div class="bg1">
            <p>w3에있는 key 이벤트 수정자</p>
            <dd>w3에 있는대로 했을시에 한글을 입력하면 process라고나옴 이걸 해결하려면 <br>
             keyValue.value = evt.target.value로 수정</dd>
            <input type="text" @keydown="getKey">
            <p>{{ keyValue }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    // alert 띄우기
    const alertShown = ref(false)
    const createAlert = () => {
       if (!alertShown.value) {
        alert("버튼을 클릭해서 alert창 생성됨")
       }
    }
// ------------
// key입력 확인하기
    const keyValue = ref('')
    const getKey = (evt) => {
        keyValue.value = evt.target.value
    }
// --------------
// 특정 글자 입력시 alert 띄우기
</script>
<style scoped>
.bg{
    margin: 10px;
    border-bottom: 3px double purple;
}
.bg1{
    width: auto;
    height: auto;
    display: inline-block;
}
</style>