import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export const chatAPI = {
  getChatHistory: async () => {
    const response = await axios.get(`${API_URL}/chat/history`);
    return response.data;
  },

  sendMessage: async (message: { role: 'user' | 'ai'; content: string }) => {
    const response = await axios.post(`${API_URL}/chat/message`, message);
    return response.data;
  },

  clearChatHistory: async () => {
    const response = await axios.delete(`${API_URL}/chat/history`);
    return response.data;
  }
};