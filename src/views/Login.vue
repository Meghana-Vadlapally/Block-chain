<template>
    <div class='login-container'>
        <form>
           <label> Account Number: </label>
                <input type="number" name="username"><br>
            <label>Password:</label>
                <input type="password" name="password">
            <input type="checkbox" name="remember">Remember me
            <a href=register>Register</a>
            <input type="button" value="Log-in">
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
    font-size: 20px;
    color: blue;
}
</style>
