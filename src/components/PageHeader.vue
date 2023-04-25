<script></script>
<template>
  <header id="header">
    <div class="navbar"></div>
    <RouterLink to="/" class="navbar-item">Home</RouterLink>
    <RouterLink to="/filmes" class="navbar-item">Filmes</RouterLink>
    <RouterLink to="/poltronas" class="navbar-item">Poltronas</RouterLink>
    <div class="navbar"></div>
  </header>
</template>
<style>
* {
  color: inherit;
  text-decoration: inherit;
}
#header {
  height: 8vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;

  background-color: black;
  font-size: 1.2rem;
  color: red;
}
.navbar-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-inline: 2vw;
}
.navbar-item:hover {
  color: cyan;
}
.navbar {
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-grow: 1;
  border-bottom: 2px solid black;
}
</style>
