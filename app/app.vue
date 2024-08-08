<template>
  <div>
    <UHeader title="Nuxt-Ollama Demo">
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
    <NuxtRouteAnnouncer />
    <UContainer>
      <NuxtPage />
    </UContainer>
  </div>
</template>
<script setup lang="ts">
</script>