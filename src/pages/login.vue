<script setup lang="ts">
definePageMeta({
  layout: 'basic',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
})

const { signIn } = useAuth()
const { t } = useI18n()
</script>

<template>
  <div class="isolate bg-white">
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
          <div>
            <div>
              <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                {{ t('login.heading') }}
              </h1>
              <div class="mt-8 flex gap-x-4 sm:justify-center">
                <StyledButton id="sign-in-btn" @click="signIn('auth0')">
                  {{ t('login.loginCta') }}
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
