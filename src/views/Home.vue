<template>
  <div class="home">
    <div class="product-list">
      <product-card></product-card>
      <product-card></product-card>
    </div>


      </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductCard from '@/components/ProductCard.vue'; // @ is an alias to /src

@Component({
  components: {
    ProductCard,
  },
})
export default class Home extends Vue {}
</script>
