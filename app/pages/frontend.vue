<script setup lang="ts">
  const ollama = useOllama()

  interface OllamaMessage {
    role: 'user' | 'assistant' | 'system'
    content: string
  }

  const messages = ref<OllamaMessage[]>([])
  const messageToSend = ref<string>('')

  async function sendMessage() {
    const message = messageToSend.value.trim()
    if (message) {
      messages.value.push({
        role: 'user',
        content: message
      })
      messageToSend.value = ''
      const response = await ollama.chat({
        model: 'llama3.1',
        messages: messages.value,
        stream: true
      })
      const len = messages.value.length
      messages.value.push({
        role: 'assistant',
        content: ''
      })
      for await (const part of response) {
        messages.value[len].content += part.message.content;
      }
      return
    }
    alert("you must enter a message");
  }

</script>

<template>
  <UContainer class="mt-5">
    <div v-for="(message, index) in messages" :key="'message_' + index">
      <strong>{{message.role}}</strong>
      <p v-html="message.content.replaceAll('\n', '<br>')"></p>
      <hr class="my-1">
    </div>
    <div class="mt-2">
      <UInput placeholder="enter a message and press enter to send" v-model="messageToSend" @keyup.enter="sendMessage()" />
    </div>
  </UContainer>
</template>

<style scoped>

</style>