<script setup>
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <PageHeader />
  <RouterView />
</template>

<style scoped>
* {
  color: inherit;
  text-decoration: inherit;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
