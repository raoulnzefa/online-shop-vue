<template>
  <nav class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
    <div class="flex flex-wrap items-center">
      <div class="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
        <a href="#">
          <span class="text-xl pl-2"><i class="em em-grinning" /></span>
        </a>
      </div>

      <div class="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
        <span class="relative w-full">
          <input v-model="search" type="search" placeholder="Search" class="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" @input="searchFilter">
          <div class="absolute search-icon" style="top: 1rem; left: .8rem;">
            <svg class="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
          </div>
        </span>
      </div>

      <div class="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
        <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
          <li class="flex-1 md:flex-none md:mr-3">
            <router-link :to="{ name: 'Cart' }">
              <button class="px-4 py-1 text-right rounded-full border border-purple-200 bg-purple-600 hover:border-transparent ">
                <img class="chat-notification-logo mt-2" src="../../assets/icons/shopping-cart.svg" alt="ChitChat Logo">
              </button>
            </router-link>
          </li>
          <li class="flex-1 md:flex-none md:mr-3">
            <router-link :to="{name: 'Login'}">
              <a class="inline-block py-2 px-4 text-white no-underline" href="/login">
                User
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
      showLogin: false
    }
  },
  methods: {
    ...mapActions({ fetchProducts: 'filterProduct' }),
    searchFilter() {
      return this.fetchProducts(this.search)
    }
  }
}
</script>
