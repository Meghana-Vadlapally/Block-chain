<template>
  <div class='login-container container'>
    <form class='login-details page-form' @submit.prevent="loginUser">
      <h1>Welcome Back!</h1>
      <div class="form-group">
        <label for="username">User Name</label>
        <div class="icon-input-container">
          <i class="fas fa-user"></i>
          <input type="text" id='username' name="username" class="icon-input" v-model="userName">
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password </label>
        <div class="icon-input-container">
          <i class="fas fa-key"></i>
          <input type="password" id="password" name="password" class="icon-input"  v-model="password">
        </div>
      </div>
      <a href="password-recover" class="forgot-link">forgot password?</a>
      <div class="form-footer">
        <button type="submit" class="button button-success">Login </button>
        <a href="/register" class="button button-default">Create Account</a>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import { trimBothSides, HTTP, CONSTANTS } from '@/utils';

  @Component({})
  export default class Login extends Vue {

    userName: string = '';
    password: string = '';

    async loginUser() {
      const loginUser = {
        userName : trimBothSides(this.userName),
        password : trimBothSides(this.password)
      };
      const response = await HTTP.post(CONSTANTS.API.USER.LOGIN, loginUser);
      if(response.status === 200) {
        this.$router.push('/'); // home page
      } else {

      }
    }
  }
</script>

<style scoped lang="scss">
  .login-container {
    background: white;
    display: block;
    margin: 0 auto;
    width: 360px;
    padding: 50px;
    margin-top: 50px;
    .form-footer {
      display: flex;
      .button {
        flex: 1;
      }
      .button-success {
        margin-right: 10px;
      }
    }
    .forgot-link {
      color: #a1aba8;
      text-decoration: none;
      text-align: right;
      display: block;
      padding: 1px 0 16px;
      &:hover {
        text-decoration: underline;
      }
    }
  }

</style>
