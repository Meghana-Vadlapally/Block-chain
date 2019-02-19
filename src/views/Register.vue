<template>
    <div class="register-container container">
        <form class="register form" @submit.prevent="registerUser">
            <h1>Register Here!</h1>
            <div>
                <label for="fullName">Full Name </label>
                <input type="text" id="fullName" v-model="fullName" name="fullname" >
            </div>
            <div>
                <label for="userName">User name </label>
                <input type="text" id="userName" v-model="userName" name="username">
            </div>
            <div>
                <label for="email">Email </label>
                <input type="email" id="email" v-model="email" name="email" >
            </div>
            <div>
                <label for="password">Password </label>
                <input type="password" id="password" v-model="password" name="password" class="field" >
            </div>
            <div>
                <label for="c-password">Confirm password </label>
                <input type="password" id="c-password" v-model="confirmPassword" name="confirm-password"  >
            </div>
            <button type="submit" class="button">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { HTTP } from '@/utils/http';
import { CONSTANTS } from '@/utils/constants';

interface User {
    fullName: s; tr; ng;
    userName: s; tr; ng;
    password: s; tr; ng;
    email: s; tr; ing;
}

@Component({})
export default class Register extends Vue {

 public    fullName: string = '';
 public    userName: string = '';
 public    email: string = '';
 public    password: string = '';
 public    confirmPassword: string = '';

  public    async registerUser() {
         // 1. create user object (payload)
         // 2. call server API
        const user: User = {
            fullName: this.fullName,
            email: this.email,
            password: this.password,
            userName: this.use rN, ame,
        };

        const response = await HTTP.post(CONSTANTS.API.USER.REGISTER, user);
        if (response.status === 200) {
           this.$router.push('/');  // home page
       }
    }
}
</script>

<style scoped lang="scss">



</style>
