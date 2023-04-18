<script></script>
<template>
  <header id="header">
    <div class="navbar"></div>
    <span class="navbar-item">Bielz Delivery</span>
    <div class="navbar"></div>
  </header>
</template>
<style>
#header {
  height: 8vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  background-color: black;
  color: white;
}
.navbar-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid red;
  padding-inline: 2vw;
}
.navbar-item:hover {
  border-bottom: 2px solid cyan;
}
.navbar {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  border-bottom: 2px solid black;
}
</style>
