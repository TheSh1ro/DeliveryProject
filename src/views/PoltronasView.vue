<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <main id="main">
    <div class="content">
      <h1 class="bancos-title">Selecione sua poltrona</h1>
      <div class="bancos-block">
        <div class="bancos-esquerda">
          <div class="banco" v-for="banco in 30" :key="banco">Poltrona Esquerda {{ mesa }}</div>
        </div>
        <div class="bancos-centro">
          <div class="banco" v-for="banco in 20" :key="banco">Poltrona meio {{ mesa }}</div>
        </div>
        <div class="bancos-direita">
          <div class="banco" v-for="banco in 30" :key="banco">Poltrona Direita {{ mesa }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#main {
  display: flex;
  flex-direction: column;
  min-height: 92vh;
  padding-block: 5vh;

  background-color: black;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 2vh;
}
.bancos-title {
  text-align: center;
  margin-bottom: 5vh;
}
.bancos-block {
  display: flex;
  justify-content: center;
  gap: 2vw;
}
.bancos-esquerda {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.bancos-centro {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: fit-content;
}
.bancos-direita {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.banco {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 10vh;
  width: 10vh;
  background-color: rgba(151, 26, 26, 0.55);
  border: 1px solid black;
  color: black;
  font-weight: bold;
  cursor: pointer;
}
.banco:hover {
  background-color: rgba(151, 26, 26, 0.75);
}
</style>
