<template>
<div class="bg-gray-100">
  <div class="container text-blue-600" >
    <router-link :to="{name: 'Main'}">
    Products
    </router-link>
  </div>
  <div class="container" v-for="(cart, index) in carts" :key="index">
    <h5 class="text-center">Cart #{{ index+1 }}</h5>
    <div v-for="(product, p_index) in cart.products" :key="p_index">
      <div class="p-4 flex space-x-4">
        <span class="text-gray-400"> {{ p_index + 1 }} </span>
        <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
          <h2 class="text-lg font-semibold text-black mb-0.5">
            {{product.name}}
          </h2>
          <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
            <div>
              <dd>
                <abbr>{{product.price}} so'm</abbr>
                  <img class="chat-notification-logo mt-2" src="../assets/icons/delete.svg">
              </dd>
            </div>
            <div class="flex-none w-full mt-0.5 font-normal">
              <dt>
                
              </dt>
            </div>
            <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
              <dd>{{product.price * product.count}} so'm</dd>
              <dt>
                 <button></button>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters({ carts: 'GET_CARTS' })
  },
  methods: {
    ...mapActions({ storeCart: 'storeCart', storeProduct: 'storeProduct' })
  }
}
</script>

<style>
 .container {
    width: 30%;
    margin: auto;
 }
</style>