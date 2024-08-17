<template>
    <div class="flex space-x-4 w-full p-2">
      <button
        @click="goToLogin"
        class="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded w-full"
      >
        {{ $t('Login') }}
      </button>
      <button
        @click="goToRegister"
        class="bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-6 rounded w-full"
      >
        {{ $t('Register') }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToLogin() {
        this.$router.push('/loginregister');
      },
      goToRegister() {
        this.$router.push('/loginregister');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  