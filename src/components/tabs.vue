<template>
  <div class="tab" v-for="(tab, index) in tabs" :key="index">
      {{ tab }}
  </div>
</template>

<script>
import { tabs } from "@/data/tabs";
export default {
 data() {
     return {
         tabs: tabs
     }
 }
}
</script>

<style>

</style>