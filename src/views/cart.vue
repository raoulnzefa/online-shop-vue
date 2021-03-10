<template>
  <div class="bg-gray-100">
    <div class="container text-blue-600" >
      <router-link :to="{name: 'Main'}">
        <button class="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
          &#8592; Products
        </button>    
      </router-link>
    </div>
    <div class="container" v-for="(cart, index) in carts" :key="index">
      <h3 class="text-center text-4xl text-gray-900 font-extrabold">Cart #{{ index+1 }}</h3>
      <div v-for="(product, p_index) in cart.products" :key="p_index">
        <div class="p-4 flex space-x-4 rounded-lg bg-white m-2">
          <span class="text-gray-400"> {{ p_index + 1 }} </span>
          <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 class="text-lg font-semibold text-black mb-0.5">
              {{product.name}}
            </h2>
            <dl class="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dd>
                  <button @click="deleteItem(product.id)" class="inline-flex items-center justify-center w-6 h-6 mr-2 text-red-200 transition-colors duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-400">
                    <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/>
                    </svg>
                  </button>
                  <abbr>{{product.price}} so'm</abbr>
                </dd>
              </div>
              <div class="flex-none w-full mt-0.5 font-normal">
                <dt>
                  
                </dt>
              </div>
              <div class="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                <dd>{{product.price * product.count}} so'm</dd>
                <dt>
                  <button @click="incCount(product)" class="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-500 rounded-full focus:shadow-outline hover:bg-indigo-800">
                    -
                  </button>
                  {{ product.count }}
                  <button @click="addCount(product)" class="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-500 rounded-full focus:shadow-outline hover:bg-indigo-800">
                    +
                  </button>
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div v-if="cart.products.length == 0">
        <h3 class="text-center mt-5 text-red-700 font-bold">No products</h3>
      </div>
      <hr>
      <div class="mx-auto px-6 rounded-lg bg-white m-5 bg-purple-800">
        <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4 text-white">
          <div>
              <span class="font-medium text-left">Всего </span>
          </div>
          <div class="col-start-3">
              {{ totalPrice(carts[0].products) }} сўм
          </div>
          <div>
              <span class="font-medium text-left">Скидка </span>
          </div>
          <div class="col-start-3">
              0
          </div>
          <div>
              <span class="font-medium text-left">Итого к оплате </span>
          </div>
          <div class="font-bold col-start-3 text-lg">
              {{ totalPrice(carts[0].products) }} сўм
          </div>
        </div>
      </div>
      <div class="text-right">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Оплата
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ carts: 'GET_CARTS' })
  },
  methods: {
    ...mapActions({ storeCart: 'storeCart', storeProduct: 'storeProduct', storeCount: 'storeCount', deleteProduct: 'deleteProduct' }),
    addCount(product){
      this.storeCount({ id: product.id, type: 'add'})
    },
    incCount(product){
      this.storeCount({ id: product.id, type: 'inc'})
    },
    deleteItem(id){
      this.deleteProduct(id)
    },
    totalPrice(products) {
      var total_price = 0
      products.forEach(product => {
        total_price = total_price + product.price*product.count
      })
      return total_price
    }
  }
}
</script>

<style>
 .container {
    width: 30%;
    margin: auto;
 }
</style>