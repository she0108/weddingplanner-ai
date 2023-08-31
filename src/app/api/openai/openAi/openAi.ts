// OpenAI v4 guide: https://github.com/openai/openai-node/discussions/217

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchChatCompletion = async () => {
  console.log("chat completion");
  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
  });
  console.log(chatCompletion.choices[0].message);
};

export const fetchStreamingChatCompletion = async () => {
  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello!" }],
    stream: true,
  });
  for await (const part of stream) {
    console.log(part.choices[0].delta);
  }
};
