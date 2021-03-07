<template>
  <div v-for="(card, index) in cards" :key="index">
    <h5 class="text-center">Cart #{{ index+1 }}</h5>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>