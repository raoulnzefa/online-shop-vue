<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 class="text-gray-100">Essential Links</h3>
   <p class="text-blue-600 md:text-green-600 ">
  The quick brown fox...
</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
