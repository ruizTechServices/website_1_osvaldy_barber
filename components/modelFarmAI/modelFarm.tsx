import * as replitai from '@replit/ai-modelfarm';

const result = await replitai.chat({
  model: 'chat-bison',
  temperature: 0.5,
  messages: [{ author: 'user', content: 'how are you?' }],
});

console.log(result);
