<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type JWT } from 'next-auth/JWT'

const { $client } = useNuxtApp()

const token: Ref<JWT | string> = ref('')
$client.auth.getToken.query({}).then((data) => {
  token.value = data ?? ''
}).catch((err: Error) => {
  token.value = err.message
})
</script>

<template>
  <div>
    <h1>Pages Index</h1>
    <p>{{ token }}</p>
  </div>
</template>
