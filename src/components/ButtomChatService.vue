<template>
    <div>
      <!-- Floating Chat Bot Button -->
      <div class="fixed bottom-4 right-4 mb-16">
        <button
          @click="toggleChatbox"
          class="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:opacity-90 transition duration-300 flex items-center justify-center animate-bounce"
        >
          <!-- Image representing chat bot -->
          <img src="../assets/icon-chatbot/Customer Service.png" alt="Chat Bot" class="w-8 h-8" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChatboxOpen: false,
        userInput: '',
        messages: []
      };
    },
    methods: {
      toggleChatbox() {
        this.isChatboxOpen = !this.isChatboxOpen;
        if (this.isChatboxOpen) {
          this.scrollToBottom();
        }
      },
      
      respondToUser(userMessage) {
        setTimeout(() => {
          this.addBotMessage('This is a response from the chatbot.');
        }, 500);
      },
      scrollToBottom() {
        this.$nextTick(() => {
          const chatbox = this.$refs.chatbox;
          chatbox.scrollTop = chatbox.scrollHeight;
        });
      }
    }
  };
  </script>
  
  <style scoped>
  @keyframes bounce {
    0%, 100% {
      transform: translateY(-10%);
    }
    50% {
      transform: translateY(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
  
  .animate-bounce {
    animation: bounce 1.5s infinite;
  }
  
  .animate-pulse {
    animation: pulse 2s infinite;
  }
  </style>
  