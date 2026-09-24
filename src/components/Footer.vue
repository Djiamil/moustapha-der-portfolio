<template>
<footer>
  <p>
    © {{ year }} Moustapha DER - Full Stack Developer
  </p>
</footer>
</template>


<script setup lang="ts">

const year = new Date().getFullYear()

</script>


<style scoped>

footer {
  text-align:center;
  padding:30px;
  color:#94a3b8;
}

</style>