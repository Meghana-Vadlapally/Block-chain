<template>
    <div class="register-container container">
        <h1>Register Here!</h1>
        <form class="register" @submit.prevent="registerUser">
            <p>Full Name</p>
            <input type="text" v-model="fullName" name="fullname" class="field">
            <p>User name</p>
            <input type="text" v-model="userName" name="username" class="field">
            <p>Email</p>
            <input type="email" v-model="email" name="email" class="field" >
            <p>Password</p>
            <input type="password" v-model="password" name="password" class="field" >
            <p>Confirm password</p>
            <input type="password" v-model="confirmPassword" name="confirm-password" class="field" >
            <button type="submit" class="button">Register</button>
        </form>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';
import { HTTP } from '@/utils/http';
import { CONSTANTS } from '@/utils/constants';

interface User {
    fullName: string,
    userName: string,
    password: string,
    email: string
}

@Component({})
export default class Register extends Vue {

    fullName: string = '';
    userName: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';

     async registerUser() {
        //1. create user object (payload)
        //2. call server API
        const user: User = {
            fullName: this.fullName,
            email: this.email,
            password: this.password,
            userName: this.userName
        };

       const response = await HTTP.post(CONSTANTS.API.USER.REGISTER, user);

        console.log(this.fullName, this.userName, this.password, this.email);

    }
}

</script>

<style scoped lang="scss">



</style>
