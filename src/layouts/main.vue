<template>
  <div>
      <Header />
  </div>
  <div class="mt-16">
      <router-view />
  </div>
</template>

<script>
import Header from './components/header'
export default {
    components: { Header }
}
</script>
