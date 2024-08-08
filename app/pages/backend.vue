<script setup lang="ts">
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
    const len = messages.value.length
    fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify(messages.value),
    }).then(res => {
      const reader = res.body?.getReader();
      reader?.read().then(function read({done, value}) {
        if (done) {
          return;
        }
        if(messages.value[len] === undefined) {
          messages.value.push({
            role: 'assistant',
            content: ''
          })
        }
        //convert Uint8Array to string
        const decoder = new TextDecoder();
        const part = decoder.decode(value);
        messages.value[len].content += part
        reader.read().then(read);
      });
    })
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