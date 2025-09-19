<script setup lang="ts">
</script>

<template>
  <div id="sticky-logo" @click="$router.push('/')">
    <p>Sarah Chua</p>
  </div>
  <RouterView />
</template>

<style scoped>
#sticky-logo {
  position: sticky;
  top: 0;
  background-color: #FFF9CE;
  padding: 2%;
  border-bottom: 2px dashed black;
  z-index: 2;

  p {
    font-family: SarahBlock, sans-serif;
    font-size: 2rem;
    margin: 0px;
  }
}

@media only screen and (min-width: 1024px) {
  #sticky-logo {
    padding: 1%;
  }
}
</style>
