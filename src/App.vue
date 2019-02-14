<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
      <router-link to="/register" v-if="!isAuthenticated">Register</router-link>
      <router-link to="/upload-product" v-if="isAuthenticated">Upload Product</router-link>
      <router-link to="/about">About</router-link>
      <span @click="logout" v-if="isAuthenticated">logout</span>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {

  get isAuthenticated() {
    return this.$store.getters.isAuthenticate; d;
  }

  public logout() {
    this.$store.dispatch('logout');
    this.$router.push('/');
  }
}
</script>


<style lang="scss">

  .input-field {

  }
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
  display: flex;
  justify-content: center;
  padding: 30px;

  }
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
  .container{
    width:400px;
    height:500px;
    background:steelblue;
    color:#fff;
    top:50%;
    left:50%;
    position:absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    h1{
      text-align:center;
      font-size:22px;
    }
    form input,p{
      margin-left:10px;
    }
  }
  .field {
    border:none;
    border-bottom:1px solid white;
    width:70%;
  }
  .button{
    border:none;
    display:block;
    border-radius:5px;
    padding:10px;
    margin:20px;
    width:70%;
    background-color:greenyellow;
  }
  .button:hover{
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
</style>
