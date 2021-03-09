<template>
 <div class="flex flex-wrap bg-gray-100">
  <div v-for="(product, index) in products" :key="index" class="w-full md:w-1/2 xl:w-1/4 p-6">
    <div class="inline-block py-4 px-4 max-w-sm mx-auto rounded-xl 
    shadow-md space-y-6 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 
    rounded-lg shadow-xl p-3">
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
        src="@/assets/images/product.jpg"
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">{{ product.name }}</p>
          <p class="text-gray-500 font-medium">{{ product.price }} so'm</p>
        </div>
        <button
          class="px-4 py-1
          text-right rounded-full border border-purple-200 
          hover:bg-purple-600 hover:border-transparent"
          @click="addCart(product)"
        >
          <img class="chat-notification-logo mt-2" src="../assets/icons/shopping-cart.svg" alt="ChitChat Logo">
        </button>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      // products: products,
    }
  },
  computed: {
    ...mapGetters({ products: 'GET_PRODUCTS', carts: 'GET_CART_PRODUCTS' })
  },
  methods: {
    ...mapActions({ storeProduct: 'storeProduct' }),
    addCart(product) {
      this.storeProduct(product)
    }
  }
};
</script>

<style>
.chat-notification-logo {
    height: 1rem;
    width: 1rem;
  }
</style>