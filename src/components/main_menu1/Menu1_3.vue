<template>
    <div class="menu1-3-container">
          <div class="content-wrapper">
            <div class="image-box">
                <img :src="menu1_3image" alt="메뉴1_2이미지">
                <div class="image-info">
                    <p class="image-name">네 모난 사회 속</p>
                    <p class="image-size">저철분 유리에 퓨징,캐스팅,가변 크기,2024</p>
                </div>
            </div>
              <div class="text-box">
                <p class="main-paragraph">
                    고치에서 나오는 것은 단순한 성장이 아니다. <br>
                    영원한 아이로 남는 것은 순수함을 간직하는 일이지만, <br>
                    동시에 어른이 됨으로써 얻을 수 있는 것들을 포기하는 일이기도 하다. <br>
                    결국,나는 내가 두려워했던 세상 속으로 나아간다. 
                </p>
            </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import m1_3image from '../../assets/menuimage/menu1_3.jpg'


    const menu1_3image = ref(m1_3image)
</script>

<style scoped>
.menu1-3-container{
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