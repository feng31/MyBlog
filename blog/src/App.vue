<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Hello Vue 3.0 + Vite" ></hello-world>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
