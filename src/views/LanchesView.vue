<script>
export default {
  data() {
    return {
      tipos: [
        {
          nome: 'Pizza',
          id: 1
        },
        {
          nome: 'Pastel',
          id: 2
        },
        {
          nome: 'Cachorro Quente',
          id: 3
        },
        {
          nome: '--------------------',
          id: 4
        },
        {
          nome: 'Salgados',
          id: 5
        },
        {
          nome: 'Porções',
          id: 6
        },
        {
          nome: 'Bebidas',
          id: 7
        }
      ]
    }
  }
}
</script>

<template>
  <main id="main">
    <div class="content">
      <div class="linecard" v-for="tipo in tipos" :key="tipo.id">
        <img
          class="linecard-image"
          src="https://cdn-icons-png.flaticon.com/128/7763/7763709.png"
          alt="FOTO"
        />
        <h1>{{ tipo.nome }}</h1>
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

  background-color: gray;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 2vh;
}
.linecard {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 2rem;
  width: 95vw;
  height: 20vh;
  cursor: pointer;
}
.linecard-image {
  position: absolute;
  opacity: calc(30%);
}
</style>
