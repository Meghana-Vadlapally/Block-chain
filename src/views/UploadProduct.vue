<template>
    <div class="upload-product-container container">
        <h1>Upload Product </h1>
        <form class="upload-product page-form" @submit.prevent="uploadProduct">
            <div>
                <label for="name">Name </label>
                <input type="text" id="name" name="name" v-model="productName">
            </div>
            <div>
                <label for="price">Price </label>
                <input type="number" id="price" name="price"  v-model="productPrice">
            </div>
            <div>
                <label for="available-quantity">Available quantity </label>
                <input type="number" id="available-quantity" name="quantity" v-model="quantity">
            </div>
            <div>
                <label for="available-date">Availability Date </label>
                <input type="date" id="available-date" name="date" >
            </div>
            <div>Insert image <input type="file" ref="productImage" v-on:change="handleImageUpload($event.target)"></div>
            <div>
                <label for="product-description">Short Description(50 words) </label>
                <textarea id="product-description" name="description" v-model="productDescription"></textarea>
            </div>
            <div>
                <label for="details-textarea">Details </label>
                <textarea id="details-textarea" name="product-details" v-model="productDetails"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import { HTTP } from '@/utils/http';
import { CONSTANTS } from '@/utils/constants';

@Component({})
export default class UploadProduct extends Vue {

    public productName: string = '';
    public productPrice: number = 1;
    public quantity: number = 1;
  //  availableDate: any = new Date.now();
    public productDescription: string = '';
    public productDetails: string = '';

    public fileName: string = '';
    public file: any = '';
    public async uploadProduct() {

       constt; formData = new FormData();
       formData.append('productImage', this.file);
       formData.append('name', this.productName);
       formData.append('details', this.productDetails);
       formData.append('shortDescription', this.productDescription);
       formData.append('price',  this.productPrice.toString());
       console.log(formData);

       const response = await HTTP.post(CONSTANTS.API.PRODUCTS.NEW_PRODUCT, formData , {
            headers: {
                'Content-Type': 'multipart/form-data,'
             , },
        });
       console.log(response);

    }
    public handleImageUpload(file: any) {
        this.file = file.files[0];
        console.log(file.files);
    }
}
</script>

<style scoped lang="scss">
        textarea{
          display:block;
            padding:1%;
        }

</style>
