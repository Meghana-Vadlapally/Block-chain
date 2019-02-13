<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/upload-product">Upload Product</router-link>
      <router-link to="/about">About</router-link>



    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
    font-size: 16px;
    display: grid;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    grid-gap: 5px;
    color: black;
    font-family: "Rubik", sans-serif;
}
#nav {
  display:flex;
  justify-content:center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration:none;
    padding:20px;
    &.router-link-exact-active {
      color: #42b983;
      padding:20px;
    }

  }
}
</style>
