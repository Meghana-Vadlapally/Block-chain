<template>
  <div id="app">
    <header>
      <div class="logo"></div>
      <div id="nav" class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
        <router-link to="/register" v-if="!isAuthenticated">Register</router-link>
        <router-link to="/upload-product" v-if="isAuthenticated">Upload Product</router-link>
        <router-link to="/about">About</router-link>
        <span @click="logout" v-if="isAuthenticated">logout</span>
      </div>
      <div class="profile"></div>
    </header>

    <div class="content-container">
      <router-view/>
    </div>
    <footer>
      footer
    </footer>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({})
  export default class App extends Vue {

    get isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }

    public logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    }
  }
</script>


<style lang="scss">
  @import "styles/base";
  header {
    background: white;
    display: flex;
    .logo {
      width: 200px;
    }
    .nav {
      flex: 1;
      a {
        padding: 0 20px;
        text-decoration: none;
        color: #000;
        &.router-link-exact-active {
          color: #58AF9B;
        }
      }
    }
    .profile {
      width: 200px;
    }
  }

  .content-container {
    min-height: calc(100vh - 80px);
  }
</style>
