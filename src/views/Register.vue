<template>
    <div class="register-container">
        <form class="register">
            <input type="text" name="fullname" placeholder="Full Name">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <input type="button" value="Register" class="'button">
        </form>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Register extends Vue {

}

</script>

<style scoped lang="scss">
    .register-container{
        margin:100px;
        border:2px solid gray;
        padding:10px;
    }
    .register{
        display:grid;
        justify-content:center;
        grid-gap:10px;
    }
    .button{
        background-color: blue;
        color:white;
        border:none;
        border-radius:5px;
        padding:10px
    }

</style>
