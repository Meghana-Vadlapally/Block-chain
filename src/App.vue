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
</style>
