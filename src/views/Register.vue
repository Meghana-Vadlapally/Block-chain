<template>
    <div class="register-container">
        <form class="register form" @submit.prevent="registerUser">
            <h1>Register Here!</h1>
            <div class="form-group">
                <label for="fullName">Full Name </label>
                <input type="text" id="fullName" v-model="fullName" name="fullname" >
            </div>
            <div class="form-group">
                <label for="userName">User name </label>
                <input type="text" id="userName" v-model="userName" name="username">
            </div>
            <div class="form-group">
                <label for="email">Email </label>
                <input type="email" id="email" v-model="email" name="email" >
            </div>
            <div class="form-group">
                <label for="password">Password </label>
                <input type="password" id="password" v-model="password" name="password" class="field" >
            </div>
            <div class="form-group">
                <label for="c-password">Confirm password </label>
                <input type="password" id="c-password" v-model="confirmPassword" name="confirm-password"  >
            </div>
            <button type="submit" class="button button-success button-block">Register</button>
        </form>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import { HTTP } from '@/utils/http';
    import { CONSTANTS } from '@/utils/constants';

    interface User {
        fullName: string;
        userName: string;
        password: string;
        email: string;
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
                userName: this.userName,
            };

            const response = await HTTP.post(CONSTANTS.API.USER.REGISTER, user);
            if (response.status === 200) {
                this.$router.push('/');  // home page
            }
        }
    }
</script>

<style scoped lang="scss">
    .register-container {
        background: white;
        display: block;
        margin: 0 auto;
        width: 360px;
        padding: 50px;
        margin-top: 50px;
    }


</style>
