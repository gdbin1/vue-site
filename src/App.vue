<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <p>경로: {{ $route.fullPath }}</p>
   <nav>
    <ul>
        <RouterLink to="/">
          <li>Go to Home</li>
        </RouterLink>
        <RouterLink to="/about">
          <li> Go to About</li>
        </RouterLink>
        <RouterLink to="/study">
          <li>Go to StudyView</li>
        </RouterLink>
        <RouterLink to="/wd">
          <li>Go to Ex_WebDesign</li>
      </RouterLink>
    </ul>

  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  /* button{
    margin: 5px;
    filter: drop-shadow(5px 5px 5px rgb(100, 9, 247));
    cursor: grab;
  }
  #comp_view {
    margin-top: 20px;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px;
  }
.single-day-english {
  font-family: "Single Day", cursive;
  font-weight: 400;
  font-style: normal;
}
.gaegu-korean {
  font-family: "Gaegu", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 150%;
}
.naerumi {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 0.4em 0.8em;
  font-size: 0.8em;
  z-index: 1000;
}
body{
  background: radial-gradient(circle, white, rgb(226, 159, 226));
} */

/* 두번째 css */
/* .page-view{
  margin: 20px;
  filter: drop-shadow(5px 7px 5px gray);
  border: 3px double black;
  box-shadow: 5px 5px 5px 5px gray;
  font-weight: bold;
  background: radial-gradient(rgb(255, 255, 255), #eecaca);
}
button{
  box-shadow: 3px 3px 3px 3px navy;
  background-color: lightblue;
  margin: 5px;
  cursor: grab;
  font-weight: bold;
  border: 3px dashed rgba(204, 179, 38, 0.712);
} */
  li {
    list-style: none;
    font-weight: bolder;
    display: inline-block;
    padding: 20px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 6px;
    box-shadow: 5px 3px 3px 3px rgba(208, 208, 208, 0.3);
  }

  li:hover{
    color: red;
    background-color: aqua;
  }
</style>
