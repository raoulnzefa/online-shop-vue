<template>
  <div class="flex">
      <div class="flex-none w-16">
          <Tabs />
      </div>
      <div class="flex-grow">
          <Products />
      </div>
  </div>
</template>

<script>
import Tabs from "@/components/tabs";
import Products from "@/components/products";
export default {
    components : { Tabs, Products }
}
</script>

<style>

</style>