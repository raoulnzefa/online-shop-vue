import { createStore } from 'vuex'
import { products } from "@/data/products";
import { carts } from "@/data/cart";
import { tabs } from "@/data/tabs";

// Create a new store instance.
const store = createStore({
  state () {
    return {
      products: products,
      carts: carts,
      tabs: tabs,
      cart_product: [],
    }
  },
  getters: {
    GET_PRODUCTS (state) {
      return state.products
    },
    GET_CARTS (state) {
      return state.carts
    },
    GET_TABS (state) {
      return state.tabs
    },    
    GET_CART_PRODUCTS (state) {
      console.log(state);
      return state.cart_product
    },
  },
  mutations: {
    SET_PRODUCT: (state, query) =>  {
      state.products = products.filter(product => {
        return product.name.toLowerCase().match(query.toLowerCase())
      })
    },
    SET_CART: (state, data) =>  {
      console.log(data);
      state.carts = this.carts.push({
        id: 2,
        cart_name: 'New Cart',
        products: []
      })
    },
    SET_ADD_CART_PRODUCT: (state, data) =>  {
      let index_c = carts.length
      carts[index_c-1].products.push(data)
      state.cart_product = carts[index_c-1].products
    },
    SET_COUNT_PRODUCT (state, data) {
      if (state.cart_product && state.cart_product.length ) {
        state.cart_product.forEach(product => {
          if (product.id == data.id) {
            if (data.type == 'add') {
              product.count++
            } else if ((data.type == 'inc') && (product.count > 1)) {
              product.count--            
            }
          }
        })
      }
    },
    DELETE_PRODUCT: (state, id) =>  {
      var index = state.cart_product.map(product => {
        return product.id;
      }).indexOf(id);
      state.cart_product.splice(index, 1);
    }
  },
  actions: {
    filterProduct ({commit}, search) {
      commit('SET_PRODUCT', search)
    },
    storeCart ({commit}, data) {
      commit('SET_CART', data)
    },
    storeProduct ({commit}, data) {
      commit('SET_ADD_CART_PRODUCT', data)
    },
    storeCount ({commit}, data) {
      commit('SET_COUNT_PRODUCT', data)
    },
    deleteProduct({commit}, id) {
      commit('DELETE_PRODUCT', id)
    }
  }
})

export default store