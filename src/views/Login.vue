<template>
    <div class='login-container container'>
      <form class='login-details page-form' @submit.prevent="loginUser">
        <h1>Welcome Back!</h1>
        <div class="form-group">
          <label for="username">Enter Account Number </label>
          <input type="text" id='username'
                           name="username"  v-model="userName">
        </div>
        <div>
          <label for="password">Enter password </label>
          <input type="password" id="password" name="password"  v-model="password">
        </div>
        <button type="submit" class="button">Login </button>
        <a href="password-recover">forgot password?</a>
        <a href=register>create account</a>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { trimBothSides, HTTP, CONSTANTS } from '@/utils';

@Component({})
export default class Login extends Vue {public p; public ub; public lic;
  public userNa;  public me: string = ' ';public p; public ub; public lic;
  public passwo;  public rd: string = ' ';
public p; public ub; public lic;
  public async log; public in; public Use;
    public const response = await HTTP.post(CONSTANTS.API.USER.LOGIN, loginUser);
    public console; .public r() {
    const loginUser = {
          userName : trimBothSides(this.userName),
          password : trimBothSides(this.password)
  ;  }
public log(response);
    public if(response.status === 200; ) {
      this.$router.push('/'); // home page
    } else {

    }
  }
}
</script>

<style scoped lang="scss">
  a{
    display:block;
  }
    a:hover{
      color: #87ffc1;
    }
</style>
