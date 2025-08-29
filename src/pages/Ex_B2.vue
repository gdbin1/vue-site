<template>
  <div class="container">
    <div class="top-row">
      <div class="item item-a">
            <div class="logo">
          <img :src="gpt_logo" alt="사이트 로고" />
        </div>
        <nav class="main-menu">
          <ul>
            <li>메뉴 1
              <ul class="sub-menu">
                <li><router-link to="/wd/b2/menu1">소개</router-link></li>
                <li><router-link to="/wd/b2/menu2">네 모난 사회 속</router-link></li>
                <li><router-link to="/wd/b2/menu3">네 모난 사회 속_2</router-link></li>
                <li><router-link to="/wd/b2/menu4">네 모난 사회 속_3</router-link></li>
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
        <nav class="spot-menu">
          <ul>
            <li><a href="#">SPOTMENU1</a></li>
            <li><a href="#">SPOTMENU2</a></li>
          </ul>
        </nav>
      </div>

      <div class="item item-b">
        <div class="contentbox banner">
          <img :src="m_slide5" alt="배너이미지" class="banner-image">
          <p>
            <span class="banner-font">Lorem ipsum dolor sit amer</span><br>
            Lorem ipsum dolor sit amet, consectetur aidpisicing elit.</p>
        </div>
        <div class="contentbox notice">
          <h3>공지사항</h3>
          <p class="notice-item">
            <span>Lorem ipsum dolor sit amet,</span>
            <span> 0000.00.00</span>
          </p>
          <p class="notice-item">
            <span>Lorem ipsum dolor sit amet,</span>
            <span> 0000.00.00</span>
          </p>
          <p class="notice-item">
            <span>Lorem ipsum dolor sit amet,</span>
            <span> 0000.00.00</span>
          </p>
        </div>
        <div class="contentbox gallery">
          <h3>갤러리</h3>
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
        <div class="contentbox shortcut">
          <div class="shortcut-item">
            <img :src="c_image1" alt="c_image1">
            <a href="#">크게 보기</a>
          </div>
          <div class="shortcut-item">
            <img :src="c_image2" alt="c_image2">
            <a href="#">크게 보기</a>
          </div>
          <div class="shortcut-item">
            <img :src="c_image3" alt="c_image3">
            <a href="#">크게 보기</a>
          </div>
          <div class="shortcut-item">
            <img :src="c_image4" alt="c_image4">
            <a href="#">크게 보기</a>
          </div>
        </div>
      </div>
      <div class="item item-c">
        <div class="slider-track"
        :style="{transform : `translateX(-${currentSlide * 100}%)`}">
         <img :src="m_slide1" alt="m_slide1">
         <img :src="m_slide2" alt="m_slide2">
         <img :src="m_slide3" alt="m_slide3">
         <img :src="m_slide4" alt="m_slide4">
         <!-- <img :src="m_slide5" alt="m_slide5"> -->
      </div>
      </div>
    </div>


    <div class="item item-d">
      <div class="footer-logo">
        <img :src="gpt_logo" alt="로고">
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
          <p>Lorem ipsum dolor sit amet consectetur adiplsicing elit, sed do elusmod tempor incididunt ut labore
            et dolore magna aliqua Ut enim ad <br>
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="modalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="text-container">
      <h2>유리 공예 전시사이트</h2>
      <br>
      <p>-로고:재미니가 생성해줌</p>
      <br>
      <p>-유리로 만든 공예품을 전시하는 사이트</p>
      <br>
      <p>-작업은 모두 유리를 직접 자르고 디자인한 뒤, 가마에 구워 완성한 것입니다. <br>
        완성된 작품은 독립된 오브제로 전시될 수 있을 뿐 아니라, 빛을 투사해 벽면에 그림자처럼 투영되는
      또 다른 형식으로도 보여집니다.</p>
      </div>
      <div class="button-container">
      <button @click="closeModal">닫기</button>
      </div>
    </div>
  </div>
  <div class="sub-page-content">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
// 메인-서브메뉴 임포트 해오기
// import Menu1 from '../components/main_menu1/Menu1_1.vue'
// 로고이미지 임포트
// import ren_logo from '../assets/logo/ren_logo.png'
// import glass_logo from '../assets/logo/logo_glass.jpg'
import gpt_logo from '../assets/logo/gpt_logo2.png'
// 얘넨 메인 슬라이드에 들어갈애들 이미지 임포트
import m_slide1 from '../assets/webimages/mainimage1.jpg'
import m_slide2 from '../assets/webimages/mainimage2.jpg'
import m_slide3 from '../assets/webimages/mainimage3.jpg'
import m_slide4 from '../assets/webimages/mainimage4.jpg'

// 컨텐츠 박스안에 배너에 들어갈 이미지 임포트
import m_slide5 from '../assets/webimages/mainimage5.jpg'

// 얘넨 컨텐츠 박스안에 갤러리안에 들어갈 이미지 임포트
import gr1 from '../assets/webimages/gallery1.jpg'
import gr2 from '../assets/webimages/garry2.jpg'
import gr1_1 from '../assets/webimages/garry1_1.jpg'
import gr2_2 from '../assets/webimages/garry2_2.jpg'

// 얘넨 컨텐츠 박스안에 갤러리 밑에칸에 들어갈 이미지 임포트
import c_image1 from '../assets/webimages/contents_image1.jpg'
import c_image2 from '../assets/webimages/contents_image2.jpg'
import c_image3 from '../assets/webimages/contents_image3.jpg'
import c_image4 from '../assets/webimages/contents_image4.jpg'

// 메뉴 이동
// import Menu1_1 from '../components/main_menu1/Menu1_1.vue'

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
const totalSlides = 4;
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

// 밑에는 모달 코드
const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
}
const closeModal = () => {
  modalOpen.value = false;
};
onMounted(() => {
  setTimeout(() => {
    openModal();
  }, 1000);
})
// 여기서부터 css------------------------------------
</script>

<style scoped>
.sub-page-content{
  width: 100%;
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  margin-top: 200px;
}
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
  background: linear-gradient(to right, #ccffff 0%, #cc99ff 100%);
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
   background: linear-gradient(to bottom right, #ffffcc 0%, #ffccff);
}
.spot-menu{
  width: 100%;
  margin-top: 60px;
}
.spot-menu ul{
  list-style:none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spot-menu li {
  padding: 0 10px;
  white-space: nowrap;
  position: relative;
}
.spot-menu li:first-child::after{
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 0.5em;
}
.spot-menu a{
  text-decoration: none;
  color: inherit;
  font-size: 0.5em;
  font-weight: bold;
  color: inherit;
}
.spot-menu a:hover{
  color:#cc99ff;
  font-weight: bold;
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
/* 컨텐츠 박스 안에 배너부스 */
.contentbox.banner{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  gap: 10px;
}
.banner-image {
  width: 60px;
  height: 60px;
  object-fit: contain;
  flex-shrink: 0;
}
.contentbox.banner p{
  flex-grow: 1;
  font-size: 0.5em;
  font-weight: bold;
  text-align: left;
  margin: 0;
}
.banner-font{
  font-size: 1.5em;
  vertical-align: super;
  font-weight: bold;
}
/* 컨텐츠 박스 안에 있는 공지사항부스 */
.contentbox.notice h3{
  width: 100%;
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
}
.notice-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: 0.7em;
  padding-bottom: 5px;
}
/* 컨텐츠 박스 안에 있는 갤러리부스 */
.contentbox.gallery{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
}
.contentbox.gallery h3{
  width: 100%;
  margin-bottom: 5px;
  margin-top: 0;
  text-align: left;
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
/* 컨텐츠박스안에 갤러리 밑에있는 박스 */
.shortcut{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}
.shortcut-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  margin: 5px;
}
.shortcut-item img{
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 5px;
}
.shortcut-item a{
  font-size: 0.6em;
  font-weight: bold;
  text-decoration: none;
  cursor: grabbing;
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
  /* object-fit: contain; */
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
  display: flex;
  text-align: left;

  /* margin-left: 30px */
}
/* 모달 css */
.modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 70%;
  transform: translate(-50%, -50%);
  background-color: rgb(204, 204, 153);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border-radius: 50px;
  box-shadow: 5px 5px 5px 5px rgb(102, 83, 58);
}
.modal-content{
  background-image: url('../assets/webimages/modal1.avif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left
}
.modal-content button{
  margin-top: 15px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: rgb(78, 78, 42);
  color: white;
  cursor: pointer;
}
.modal-content h2{
  border-bottom: 3px solid rgb(128, 43, 0);
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 200%;
  margin-top: 10px;
  padding-bottom: 10px;
}
.modal-content p{
  margin:0;
  font-weight: bold;
  font-size: 130%;
  border-bottom: 3px solid rgb(128, 43, 0);
  padding-bottom: 5px;
}
.modal-content p:last-child {
  border-bottom: none;
}
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
.text-container{
  font-weight: bold;
}
/* 그 외 css */
/* .click-gallery{
  font-size: 0.7em;
  color: rgb(46, 46, 46);
  margin-top: -10px;
  text-align: center;
} */
</style>