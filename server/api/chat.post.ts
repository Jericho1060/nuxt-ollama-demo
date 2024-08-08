import {useRequestBody} from "nitropack/runtime/utils";

export default defineEventHandler(async (event) => {
    const b = await readBody(event);
    const ollama = useOllama();
    const response = await ollama.chat({
        model: 'llama3.1',
        messages: JSON.parse(b),
        stream: true
    })

    const stream = new ReadableStream({
        async pull(controller) {
            for await (const part of response) {
                controller.enqueue(part.message.content);
            }
            controller.close();
        }
    })

    return sendStream(event, stream);
})