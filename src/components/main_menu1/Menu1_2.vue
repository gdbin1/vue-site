<template>
    <div class="menu1-2-container">
        <div class="content-wrapper">
            <div class="image-box">
                <img :src="menu1_2image" alt="메뉴1_2이미지">
                <div class="image-info">
                    <p class="image-name">네 모난 사회 속</p>
                    <p class="image-size">저철분 유리에 퓨징,캐스팅,가변 크기,2024</p>
                </div>
            </div>
            <div class="text-box">
                <p class="main-paragraph">애벌레는 고치를 지나 마침내 나비가 된다. 하지만 <br>
                나는 나비가 되길 바라지 않았다. 책임과 의무가 <br>
            따르는 어른이 되는 것보다는, 애벌레였던 시절을 <br>
        추억하며 고치 속에 머물고 싶었다. '동심'이라는 핑계를 무기 삼아 현실을 외면했고,
    그렇게 고치 속에서 머무는 시간이 길어졌다. 하지만 고치가 된 나는 더 이상 애벌레가 아니었다.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import m1_2image from '../../assets/menuimage/menu1_2.jpg'

const menu1_2image = ref(m1_2image)
</script>

<style scoped>
.menu1-2-container{
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
    margin-top: 500px;
    font-weight: bold;
}
</style>