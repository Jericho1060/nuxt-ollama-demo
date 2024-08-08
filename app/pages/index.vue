<script setup lang="ts">
</script>

<template>
  <ULandingGrid class="mt-5">
    <UAlert color="yellow" class="col-span-12">
      <template #description>
        <p class="font-bold">Welcome to the Nuxt-Ollama demo!</p>
        <p>This is a demo of a live chat application using Nuxt-Ollama. You can interact with the assistant by typing messages in the input box below and pressing enter. The assistant will respond
          with a message based on the input you provide.</p>
        <p class="font-bold mt-2">Before you start:</p>
        <p>Be sure you installed Ollama and pulled the model llama3.1</p>
        <p>If you don't, just go to <NuxtLink class="font-bold" href="https://ollama.com">the official Ollama website</NuxtLink> to do it.</p>
      </template>
    </UAlert>
    <ULandingCard title="Frontend demo" class="col-span-6" to="/frontend">
      Demo of a live chat application using Nuxt-Ollama on the frontend.
    </ULandingCard>
    <ULandingCard title="Backend demo" class="col-span-6" to="/backend">
      Demo of a live chat application using Nuxt-Ollama on the backend.
    </ULandingCard>
  </ULandingGrid>
</template>

<style scoped>

</style>