<template>
    <div class="upload-product-container container">
        <h1>Upload Product</h1>
        <form class="upload-product page-form">
            <label>Name</label>
            <input type="text" class="field" >
            <label>Price</label>
            <input type="number" class="field" value="product-price" >
            <label>Available quantity</label>
            <input type="number" class="field" value="product-quantity">
            <label>Availability Date:</label>
            <input type="date">
            <p>Image<input type="file"></p>
            <label>Details</label>
            <textarea></textarea>
            <label>Description</label>
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
