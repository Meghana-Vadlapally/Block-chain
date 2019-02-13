<template>
    <div class="upload-product-container">
        <form class="upload-product">
            <input type="text" placeholder="Enter product name here">
            <input type="number" value="product-price" placeholder="Enter product price here">
            <p>Image<input type="file"></p>
            <textarea placeholder="Enter product description here" rows="5" cols="10"></textarea>

        </form>
    </div>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class UploadProduct extends Vue {

}

</script>

<style scoped lang="scss">
        .upload-product-container{
            margin:100px;
            border:2px solid gray;
            padding:10px;
        }
    .upload-product{
        display:grid;
        grid-gap:10px;
        justify-content:center;
    }

</style>
