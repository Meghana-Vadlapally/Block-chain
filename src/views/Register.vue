<template>
    <div>
        <form>
            <input type="text" name="fullname" placeholder="Full Name">
            <input type="email" name="email" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <input type="button" value="Register">
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

</style>
