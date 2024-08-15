<template>
    <div class="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-md mx-auto">
      <!-- Logo and Language Selector -->
      <div class="flex justify-between items-center mb-6">
        <img src="../assets/logo-company/logo.png" alt="PP88 Logo" class="w-32 h-auto" />
        <div class="relative">
          <button class="text-sm font-medium">Language</button>
          <!-- Language Dropdown Placeholder -->
          <!-- Add dropdown functionality if needed -->
        </div>
      </div>
  
      <!-- Tabs for Login and Register -->
      <div class="flex justify-between mb-4">
        <button
          @click="isLogin = true"
          :class="isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'"
          class="text-lg font-semibold w-full py-2"
        >
          Login
        </button>
        <button
          @click="isLogin = false"
          :class="!isLogin ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'"
          class="text-lg font-semibold w-full py-2"
        >
          Register
        </button>
      </div>
  
      <!-- Login Form -->
      <div v-if="isLogin">
        <div class="mb-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
        </div>
        <div class="mb-4 relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Login Password"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword">
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="w-5 h-5"></i>
          </span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox bg-gray-800 border-none text-blue-600" />
            <span class="ml-2 text-sm">Remember Me</span>
          </label>
          <a href="#" class="text-sm text-blue-500">Forget Password</a>
        </div>
        <button class="w-full bg-blue-600 py-3 rounded-md text-white text-lg font-semibold">
          Login Now
        </button>
        <p class="text-center text-sm text-gray-400 mt-4">
          Encountered login problems, please contact <a href="#" class="text-blue-500">Online Customer Service</a>
        </p>
      </div>
  
      <!-- Register Form -->
      <div v-else>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
        </div>
        <div class="mb-4 relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Login Password"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword">
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="w-5 h-5"></i>
          </span>
        </div>
        <div class="mb-4 relative">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            placeholder="Confirm password"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="toggleConfirmPassword">
            <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="w-5 h-5"></i>
          </span>
        </div>
        <div class="mb-4 flex items-center">
          <img src="../assets/icons/flag.png" alt="Country Code" class="w-6 h-6 mr-2" />
          <select class="bg-gray-800 rounded-md text-sm p-3 text-white w-20 mr-2">
            <option>+84</option>
            <!-- Add more country codes here -->
          </select>
          <input
            type="text"
            placeholder="Phone Number"
            class="flex-1 p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Discount Code"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
        </div>
        <button class="w-full bg-blue-600 py-3 rounded-md text-white text-lg font-semibold">
          Register
        </button>
        <div class="flex items-center mt-4">
          <input type="checkbox" class="form-checkbox bg-gray-800 border-none text-blue-600" />
          <span class="ml-2 text-sm">
            I have read and agree to the relevant <a href="#" class="text-blue-500">Terms and Privacy Policy</a>
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true, // Determines whether the Login or Register form is shown
        showPassword: false, // State to toggle the visibility of the password
        showConfirmPassword: false, // State to toggle the visibility of the confirm password
      };
    },
    methods: {
      togglePassword() {
        this.showPassword = !this.showPassword;
      },
      toggleConfirmPassword() {
        this.showConfirmPassword = !this.showConfirmPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles for the component */
  .bg-gray-900 {
    background-color: #1a202c;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .placeholder-gray-500 {
    color: #6b7280;
  }
  
  .bg-gray-800 {
    background-color: #2d3748;
  }
  
  .bg-blue-600 {
    background-color: #3b82f6;
  }
  
  .form-checkbox:checked {
    background-color: #3b82f6;
  }
  </style>
  