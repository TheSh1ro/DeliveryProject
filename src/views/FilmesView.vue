<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <main id="main">
    <div id="content">
      <div class="categorias">
        <div class="categoria" v-for="categoria in 3" :key="categoria">
          Categoria {{ categoria }}
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  min-height: calc(92vh + 2px);
  padding-block: 5vh;

  background-color: black;
  color: white;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 2vh;
}
.categorias {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
}
.categoria {
  background-color: lightcoral;
  width: 40vw;
  height: 10vh;
}
</style>
