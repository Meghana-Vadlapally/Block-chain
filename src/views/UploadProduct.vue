<template>
    <div class="upload-product-container container">
        <h1>Upload Product</h1>
        <form class="upload-product page-form">
            <p>Prouct Name</p>
            <input type="text" class="field" >
            <p>Product Price</p>
            <input type="number" class="field" value="product-price" >
            <p>Image<input type="file"></p>
            <p>Product Description</p>
            <textarea></textarea>

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
        textarea{
            width:70%;
            margin-left:12px;
        }

</style>
