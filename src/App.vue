<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png" /><br />
      <router-link to="/">Home</router-link> |
      <router-link to="/color">Auto Color Picker</router-link> |
      <router-link to="/draggable">Draggable Demo</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
