<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  width:100%;
  height:44px;
  background:#000;
  color:#fff;
  line-height:44px;
  text-align: center;
}
.header .left {
  position: absolute;
  font-size: 20x;
  font-weight: bold;
  padding: 0px 20px;
}
.header .right {
  position: absolute;
  right: 20px;
  top: 0px;
  font-size: 20x;
  font-weight: bold;
  padding: 0px 20px;
}
</style>
