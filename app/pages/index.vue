<script setup lang="ts">

import {type ModelResponse} from "ollama/browser";

const ollama = useOllama()

const models = ref<ModelResponse[]>([])

const fetchModels = async () => {
  models.value = (await ollama.list()).models
  console.log(models.value)
}

fetchModels()

const formatDateTimeToLocaleString = (date: string) => {
  return (new Date(date)).toLocaleDateString() + ' ' + (new Date(date)).toLocaleTimeString()
}

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
    <ULandingCard title="Models Installed" class="col-span-12">
      <div  class="flex justify-between">
        <strong>Model Name</strong>
        <strong>Model Familly & parameter size</strong>
        <strong>Last modified</strong>
      </div>
      <div v-for="(model, index) in models" :key="'model'+index">
        <div  class="flex justify-between">
          <p>{{ model.name }}</p>
          <p>{{model.details.family}} {{model.details.parameter_size}}</p>
          <p>{{formatDateTimeToLocaleString(model.modified_at.toString())}}</p>
        </div>
        <hr>
      </div>
    </ULandingCard>
  </ULandingGrid>
</template>

<style scoped>

</style>