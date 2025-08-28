<template>
  <div class="container">
    <div class="top-row">
      <div class="item item-a">
            <div class="logo">
          <img :src="ren_logo" alt="사이트 로고" />
        </div>
        <nav class="main-menu">
          <ul>
            <li>메뉴 1
              <ul class="sub-menu">
                <li>서브메뉴 1-1</li>
                <li>서브메뉴 1-2</li>
                <li>서브메뉴 1-3</li>
                <li>서브메뉴 1-4</li>
              </ul>
            </li>
            <li>메뉴 2
               <ul class="sub-menu">
                <li>서브메뉴 2-1</li>
                <li>서브메뉴 2-2</li>
                <li>서브메뉴 2-3</li>
                <li>서브메뉴 2-4</li>
              </ul>
            </li>
            <li>메뉴 3
               <ul class="sub-menu">
                <li>서브메뉴 3-1</li>
                <li>서브메뉴 3-2</li>
                <li>서브메뉴 3-3</li>
                <li>서브메뉴 3-4</li>
              </ul>
            </li>
            <li>메뉴 4
               <ul class="sub-menu">
                <li>서브메뉴 4-1</li>
                <li>서브메뉴 4-2</li>
                <li>서브메뉴 4-3</li>
                <li>서브메뉴 4-4</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div class="item item-b">
        <div class="contentbox banner">여기 배너 배너
          <br>배너
        </div>
        <div class="contentbox notice">여기 공지사항</div>
        <div class="contentbox gallery">
          <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
            <div class="gallery-border-box">
              <img
               @click.left.shift="changeImage(item)"
               :src="item.images[item.currentImageIndex]"
                alt="'gr' + (index + 1)" />
            </div>
            <p class="image-desc">{{ item.description }}</p>
          </div>
          <p style="text-align: center; font-size: 0.7em; width: 100%;">
            --이미지에 shift+좌클릭시 뒷모습 확인가능--</p>
        </div>
        <div class="contentbox shortcut">여기는 사진이랑 링크인가?</div>
      </div>


      <div class="item item-c">
        <div class="slider-track"
        :style="{transform : `translateX(-${currentSlide * 100}%)`}">
         <img :src="m_slide1" alt="m_slide1">
         <img :src="m_slide2" alt="m_slide2">
         <img :src="m_slide3" alt="m_slide3">
      </div>
      </div>
    </div>


    <div class="item item-d">
      <div class="footer-logo">
        <img :src="ren_logo" alt="로고">
      </div>
      <div class="footer-content">
        <div class="footer-menu">
          <ul>
            <li><a href="#">FOOTERMENU1</a></li>
            <li><a href="#">FOOTERMENU2</a></li>
            <li><a href="#">FOOTERMENU3</a></li>
            <li><a href="#">FOOTERMENU4</a></li>
            <li><a href="#">FOOTERMENU5</a></li>
            <li><a href="#">FOOTERMENU6</a></li>
          </ul>
        </div>
        <div class="footer-copyright">
          <p>Copyright ---여기 카피라이트</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
// 로고이미지 임포트
import ren_logo from '../assets/logo/ren_logo.png'
// 얘넨 메인 슬라이드에 들어갈애들 이미지 임포트
import m_slide1 from '../assets/webimages/mainimage1.jpg'
import m_slide2 from '../assets/webimages/mainimage2.jpg'
import m_slide3 from '../assets/webimages/mainimage3.jpg'

// 얘넨 컨텐츠 박스안에 갤러리안에 들어갈 이미지 임포트
import gr1 from '../assets/webimages/gallery1.jpg'
import gr2 from '../assets/webimages/garry2.jpg'
import gr1_1 from '../assets/webimages/garry1_1.jpg'
import gr2_2 from '../assets/webimages/garry2_2.jpg'

// 밑에는 이미지 특정 키 입력시 변경되는거
const galleryItems = ref([
  {
    currentImageIndex: 0,
    images: [gr1,gr1_1],
    description: '작업한 유리3장을 겹쳐서 보이게하는 완성물'
  },
  {
    currentImageIndex: 0,
    images: [gr2,gr2_2],
    description: '작업한 유리2장을 겹쳐서 보이게하는 완성물'
  }
])
const changeImage = (item) => {
  item.currentImageIndex = (item.currentImageIndex + 1) % item.images.length
}
// 밑에는 슬라이드 쇼에 관한것
const currentSlide = ref(0);
const totalSlides = 3;
let slideInterval;

const startSlideShow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides
  }, 3000)
}

onMounted(() => {
  startSlideShow();
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
// 여기서부터 css------------------------------------
</script>

<style scoped>
*{box-sizing: border-box;}
body {
  margin: 0;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.top-row {
  display: flex;

  flex-grow: 1;
}

.item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  border: 1px solid #ddd;
}

.item-a {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
}

.item-b {
  width: 400px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.item-c {
  flex-grow: 1;
  /* 웹페이지 너비에서 A(200px)와 B(400px)의 너비를 뺀 값으로 설정 */
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
}

.item-d {
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
/* 로고 */
.logo {
  margin-bottom: 10px;
}
.logo > img{
  width: 200px;
  height: 100px;
  object-fit: contain; 
}
/* 메뉴 */
.main-menu {
  width: 100%;
}
.main-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
}
.main-menu li {
  font-size: 0.8em;
  font-weight: bold;
  cursor: grab;
  padding: 0px;
  margin: 3px;
  width: 180px;
  border: 1px solid gray;
  box-shadow: 5px 5px 5px;
}
.main-menu li:hover > .sub-menu{
  display: block;
}
/* 서브메뉴 */
.sub-menu {
  list-style-type: none;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid black;
  box-shadow: 3px 3px 3px gray;
  background-color: #98fdf0; /* 배경색 추가 */
  display: none;
  box-shadow: 5px 5px 5px;
}

.sub-menu li {
  font-size: 1em;
  font-weight: normal;
  text-align: left;
  padding: 0;
  margin-bottom: 0;
  border: none;
}
.sub-menu li:hover{
  background-color: blanchedalmond;
}

/* 여기서부터 컨텐츠박스-------------------------- */
.contentbox {
  flex-grow: 1;
  border-bottom: 1px dashed gray;
  padding: 15px;
  text-align: center;
  font-size: 0.8em;
  font-weight: bold;
}
.banner {flex: 1.5}
.notice{flex:3.5}
.gallery{flex:3.5}
.shortcut{flex:1.5}
.content-box:last-child {
  border-bottom: none;
}
/* 컨텐츠 박스 안에 있는 갤러리부스 */
.contentbox.gallery{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}
.gallery-item{
  display: flex;
  flex-direction: column;
  flex: 1 1 45%;
  margin: 0;
}
.gallery-border-box{
  border: 3px solid black;
  padding: 5px;
  box-shadow: inset 0 0 10px 5px gray;
}
.gallery-item img{
  max-width: 100%;
  height: auto;
  display: block;
}
.image-desc{
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 0.7em;
}
/* 여기부터 이미지 슬라이드 ------------------------------ */
.slider-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.slider-track{
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}
.slider-track img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
}

/* 여기서부터 푸터------------------------------ */
.footer-logo {
  flex-shrink: 0;
  width: 200px;
  border-right: 1px dashed gray;
  padding-right: 20px;
}
.footer-logo > img {
  width: 100%;
  height: 100px;
  object-fit: contain;
}
.footer-content{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  padding-left: 30px;
  /* padding-left: 10px; */
  /* margin-left: 20px; */
}
.footer-menu {
  border-bottom: 1px dashed gray;
  padding-bottom: 30px;
  /* margin-bottom: 10px; */
  width: 100%;
}
.footer-menu ul {
  list-style:none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
  
}
.footer-menu li {
  font-size: 0.6em;
  white-space: nowrap;
  /* margin-left: 30px; */
  border-right: 3px solid black;
  padding-right:  20px;
  /* border-right: 1px solid black; */
}
.footer-menu li:last-child{
  border-right: none;
}
.footer-copyright{
  font-size: 0.4em;
  color: 777;
  /* margin-left: 30px */
}
/* 그 외 css */
/* .click-gallery{
  font-size: 0.7em;
  color: rgb(46, 46, 46);
  margin-top: -10px;
  text-align: center;
} */
</style>