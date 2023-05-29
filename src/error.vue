<script setup lang="ts">
const props = defineProps<{ error: NuxtError }>()

interface NuxtError extends Error {
  statusCode: number
  message: string
}

const { statusCode } = props.error

const message = statusCode === 404 ? 'Please check the URL in the address bar and try again.' : 'Hmmm something bad seems to have happened. Sorry about that.'
const title = statusCode === 404 ? 'Page not found' : 'Error'
</script>

<template>
  <div>
    <NuxtLayout name="basic">
      <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="mx-auto my-36 max-w-max">
          <main class="sm:flex">
            <p class="text-4xl font-bold tracking-tight text-blue-dark sm:text-6xl lg:text-7xl">
              {{ statusCode }}
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
                  {{ title }}
                </h1>
                <p class="mt-1 text-lg text-blue-dark">
                  {{ message }}
                </p>
              </div>
              <div class="mt-16 ml-12 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <NuxtLink to="/">
                  <StyledButton> Go Home</StyledButton>
                </NuxtLink>
              </div>
            </div>
          </main>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
