<script setup lang="ts">
const { $client } = useNuxtApp()

const { data, error, pending } = $client.hello.getHello()
const hello = data
</script>

<template>
  <div>
    <h1>{{ hello }}</h1>
  </div>
</template>
