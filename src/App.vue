<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
body {
  background-image: url("./assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fbfbf9;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

a {
  font-weight: bold;
  color: #313131;
  text-decoration: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #313131;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

div {
  box-sizing: border-box;
}
</style>
