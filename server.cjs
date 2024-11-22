const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require('openai-edge');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const config = new Configuration({
  apiKey: process.env.VITE_OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

app.post('/api/chat', async (req, res) => {
  try {
    console.log('Received chat request');
    const { messages } = req.body;

    if (!process.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured');
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `You are a helpful assistant that specializes in climate-related questions focusing on the African continent. 
          Provide accurate, up-to-date information about climate change, environmental issues, and sustainability efforts in Africa. 
          If asked about other regions, politely redirect the conversation back to Africa-specific climate topics.`
        },
        ...messages
      ]
    });

    const data = await response.json();
    const messageContent = data.choices[0].message.content;
    return res.json({ message: messageContent });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to process chat request' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});