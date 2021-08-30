<template>
  <div class="flex justify-items-start md:justify-items-center">
    <div class="flex-none w-100">
      <Tabs />
    </div>
    <div class="flex-grow w-100">
      <Products />
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/tabs'
import Products from '@/components/products'
export default {
  components: { Tabs, Products }
}
</script>

<style>
</style>
