<template>
    <div class="product-card">
        <img alt="" class="product-image" src="https://rukminim1.flixcart.com/image/612/612/jqidjm80/headphone/b/r/g/jbl-t450-bt-original-imaf7vzzgz3d8gd6.jpeg?q=70">
        <h2>Product Name</h2>
        <span>Seller Name</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore natus nihil praesentium.</p>
        <div class="card-footer">
            <div class="price">$10</div>
            <a href="" class="button button-default">More details</a>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class ProductCard extends Vue {

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
