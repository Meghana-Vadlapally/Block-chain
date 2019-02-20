<template>
    <div class="product-card">
        <img alt="" class="product-image" :src="imageBasePath+product.productImagePath">
        <h2>{{product.name}}</h2>
        <span>{{product.postedBy.fullName}}</span>
        <p>{{product.shortDescription}}</p>
        <div class="card-footer">
            <div class="price">{{product.price}}</div>
            <a href="" class="button button-default">More details</a>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { CONSTANTS } from '@/utils';
    export interface Product {
        status: number;
        _id: string;
        name: string;
        details: string;
        shortDescription: string;
        price: number;
        postedBy: PostedBy;
        productImagePath: string;
        postedOn: Date;
        availability: Date;
    }

    export interface PostedBy {
        _id: string;
        fullName: string;
    }

    @Component({})
    export default class ProductCard extends Vue {
        @Prop() product: Product;
        imageBasePath: string = CONSTANTS.IMAGE_BASE_PATH;
    }
</script>

<style scoped lang="scss">
    .product-card {
        background: white;
        padding: 20px 25px;
        .product-image {
            display: block;
            margin: 0 auto;
            height: 300px;
        }
        .card-footer {
            display: flex;
            .price {
                flex: 1;
                font-size: 25px;
            }
            .button {

            }
        }
    }
</style>
