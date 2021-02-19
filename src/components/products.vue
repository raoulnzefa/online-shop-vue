<template>
  <div v-for="(product, index) in products" :key="index">
      <div>
          <img :src="product.image">
      </div>
      <div>
        <div>
            {{ product.name }}
        </div>
        <div>
            {{ product.price }}
        </div>
      </div>
      <div>
        {{ product.count }}
      </div>
  </div>
</template>

<script>
import { products } from "@/data/products";
export default {
    data() {
        return {
            products: products
        }
    }
}
</script>

<style>

</style>