<template>
  <div class="home product-display">
    <div class="product-list">
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/ProductCard.vue';
import { CONSTANTS, HTTP } from '@/utils'; // @ is an alias to /src

@Component({
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {

  public created() {
    this.getProducts();
  }
  public getProducts() {
    const response = HTTP.get(CONSTANTS.API.PRODUCTS.PRODUCT_LIST);
    console.log(response);
  }

}
</script>

<style scoped lang="scss">
  .product-display{
      padding:20px;

    .product-list{
      display:grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap:20px;
    }

  }



</style>
