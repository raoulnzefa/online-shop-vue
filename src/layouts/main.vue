<template>
  <div>
      <Header />
  </div>
  <div>
      <router-view />
  </div>
</template>

<script>
import Header from './components/header'
export default {
    components: { Header }
}
</script>
