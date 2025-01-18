import OpenAI from 'openai';
import { Message_t } from './types';

export function getChatCompletion(messages: Message_t[]) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // todo: response format once I have a UI
  return openai.chat.completions.create({
    model: 'gpt-4o',
    messages: messages,
  });
}