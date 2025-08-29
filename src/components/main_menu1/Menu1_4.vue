<template>
    <div class="menu1-4-container">
        <div class="content-wrapper">
            <div class="image-box">
                <img :src="menu1_4image" alt="메뉴1_2이미지">
                <div class="image-info">
                    <p class="image-name">네 모난 사회 속</p>
                    <p class="image-size">저철분 유리에 퓨징,캐스팅,가변 크기,2024</p>
                </div>
            </div>
             <div class="text-box">
                <p class="main-paragraph">
                    '네 모난'은 이러한 변화의 과정을 담은 이야기다. <br>
                    여기서 '네'는 가까이에 있는 '너'일 수도, 차가운 사회일 수도, <br>
                    각박한 삶일 수도 있다. 우리는 저마다의 모난 세상 속에서 자신만의 <br>
                    고치를 만들고, 그 안에 머물며 안정을 찾는다. 그러나 언젠가는 그곳을 벗어나야만 한다.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import m1_4image from '../../assets/menuimage/menu1_4.jpg'


    const menu1_4image = ref(m1_4image)
</script>

<style scoped>
.menu1-4-container{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
}
.content-wrapper{
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    /* max-width: 900px; */
}
.image-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
}
.responsive-image{
    width: 100%;
    height: auto;
    object-fit: contain;
    border: 1px solid black;
}
.image-info{
    margin-top: 15px;
    text-align: center;
    font-size: 0.8em;
    font-weight: bold;
}
.image-info p{
    margin: 5px 0;
}
.text-box {
    flex: 2;
    text-align: left;
}
.main-paragraph {
    line-height: 1.8;
    text-align: justify;
    font-size: 1em;
    margin-top: 250px;
    font-weight: bold;
}
</style>