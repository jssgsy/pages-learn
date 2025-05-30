<script setup lang="ts">

import axios from "axios";


async function callFn() {
  console.log("------callFn()");
  let rsp = await axios.get('/api/helloworld');
  console.log(rsp, 'rsp');

}
</script>

<template>
  <div>this is the page of EdgeOneFunction.vue</div>
  <button @click="callFn">调用function</button>
</template>

<style scoped>

</style>