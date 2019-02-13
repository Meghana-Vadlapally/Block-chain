<template>
    <div class='login-container'>

        <form class='login-details'>
                Welcome Back!
                <input type="number" name="username" placeholder="account number" class="'text">
                <input type="password" name="password" placeholder="password" class="'text">
                <input type="button" value="Log-in" class="button">
                <a href="password-recover">forgot password?</a>
                 <a href=register>create account</a>
        </form>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Login extends Vue {
}

</script>

<style scoped lang="scss">
    .login-container {
      margin:100px;
      border:2px solid gray;
      padding:10px;
    }
    a{
      text-decoration:none;
      color:black;
      font-size:11px;
    }
  .login-details{
      display:grid;
      grid-row-gap:10px;
      justify-items:center;
  }
  .button{
      background-color: blue;
      color:white;
      border:none;
      border-radius:5px;
      padding:10px
  }
</style>
