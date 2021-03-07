<template>
  <div class="tab" v-for="(tab, index) in tabs" :key="index">
    <button
      class="px-5 my-3 mx-2 py-1 w-52 text-sm text-purple-600 font-semibold rounded border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
    >
     {{ tab.name }}
     <span>
         {{tab.count}}
     </span>
    </button>
  </div>
</template>

<script>
import { tabs } from "@/data/tabs";
export default {
  data() {
    return {
      tabs: tabs,
    };
  },
};
</script>

<style>
</style>