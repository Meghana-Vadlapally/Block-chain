<template>
    <div class='login-container container'>
      <h1>Welcome Back!</h1>
      <form class='login-details page-form' @submit.prevent="loginUser">
                <p>Enter Account Number</p>
                <input type="text" name="username" class="field" v-model="userName">
                <p>Enter password</p>
                <input type="password" name="password"  class="field" v-model="password">
                <button type="submit" class="button">Login</button>
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
      color:blue;
    }
</style>
