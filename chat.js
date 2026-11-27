import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

const chat = createChat({
  mode: 'window',
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/ae2ed2ed-93ed-44a9-ad40-03b4f500df1e/chat',
  title: 'JS-SEZ advisor',
  initialMessages: [
    'What would you like to know about the JS-SEZ?',
    'Ask about zones, SETUP, incentives or staff passes.'
  ],
  loadPreviousSession: false,
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Ask about zones, incentives and operations.'
    }
  }
});

document.querySelector('#open-advisor')?.addEventListener('click', () => {
  const launcher = document.querySelector('.chat-window-toggle');
  launcher?.click();
});
