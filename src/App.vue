<template>

  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// 页面加载时跳转
export default {
  name: 'app',
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
