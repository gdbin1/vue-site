<template>
    <!-- 클릭시 alert창 띄우는 이벤트 -->
    <div class="bg">
        <div class="bg1">
        <p>자습 w3에 있는 이벤트 수정자</p>
        <button @click.once="createAlert">alert 띄우는 창 버튼</button>
        </div>
    </div>
    <!-- 입력한 글자를 뜨게하는 양방향 이벤트 -->
    <div class="bg">
        <div class="bg1">
            <p>w3에있는 key 이벤트 수정자</p>
            <dd>w3에 있는대로 했을시에 한글을 입력하면 process라고나옴 이걸 해결하려면 <br>
             keyValue.value = evt.target.value로 수정</dd>
            <input type="text" @keydown="getKey">
            <p>{{ keyValue }}</p>
        </div>
    </div>
    <!-- 특정 글자 입력시 alert 뜨게 하는 이벤트 -->
    <div class="bg">
        <div class="bg1">
            <p>"d"를 누르면 alert가 뜨게 하기(특정 글자 지정)</p>
            <dd style="border: 3px dashed navy;">
                여기에 ctrl+d를 눌렀을때 alert가 뜨게 하려면 @keydown.d를 @keydown.ctrl.d로 변경</dd>
                <br>
            <textarea cols="20" rows="3"
            @keydown.d="errorAlert"
            placeholder="입력해보세요"></textarea>
        </div>
    </div>
    <!-- 마우스 우클릭시 배경색 변경 이벤트 -->
    <div class="bg">
        <div @click.right="changeColor"
        :style="{backgroundColor: 'hsl(' + bgColor + ', 80%, 80%)'}">
            <p>여기에 마우스 우클릭 해보세요 (우클릭 메뉴가 계속뜸) </p>
            <p style="border: 3px dashed navy;">
                컨트롤+우클릭해서 색을 바꾸고싶을땐 <br>
            div @click.right=""를 div @click.right.ctrl=""로 변경 위에거랑 비슷</p>
            <p style="border: 3px dashed red;">
                우클릭시 뜨는 메뉴가 거슬려서 이거만 없애고 우클릭 배경색 변경 이벤트는 유지하고싶을땐 <br>
                div @click.right=""를  div @click.right.prevent=""로 변경 </p>
        </div>
    </div>
    <div class="bg">
        <p>특정 키 입력시 이미지를 바꾸는 이벤트</p>
        <p>쉬프트+마우스 좌클릭시 이미지가 바뀜</p>
        <img @click.left.shift="changeImg" :src="imgUrl" alt="imgRenUrl">
    </div>
</template>

<script setup>
import { ref } from 'vue';

import rengo1_1 from '../../assets/rengo1_1.jpg'
import rengo2 from '../../assets/rengo2.jpg'
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
const errorAlert = () => {
    alert("d를 눌렀어요")
}
// 마우스 우클릭시 배경 색 바뀌는 이벤트
const bgColor = ref(0)
const changeColor = () => {
    bgColor.value +=50
}

// <!-- 특정 키 입력시 이미지가 바뀌는 이벤트 -->
const imgRenUrl = ref(0)
const imgUrl = ref(rengo1_1)
const images = [
    rengo1_1,
    rengo2
]
const changeImg = () => {
    imgRenUrl.value++
    if(imgRenUrl.value >= images.length){
        imgRenUrl.value = 0
    }
    imgUrl.value = images[imgRenUrl.value]
}
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
img{
    width: 200px;
    height: 200px;
}
</style>