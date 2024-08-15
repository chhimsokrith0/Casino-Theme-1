<template>
  <div class="bg-cover bg-center min-h-screen flex items-center justify-center p-4" :style="`background-image: url('/path/to/your/background-image.png')`">
    <div class="bg-gray-900 p-6 rounded-lg shadow-lg text-white w-full max-w-md">
      <!-- Logo and Language Selector -->
      <div class="flex justify-between items-center mb-6">
        <img src="../assets/logo-company/logo.png" alt="PP88 Logo" class="w-24 h-auto" />
        <div class="relative">
          <button class="text-sm font-medium">Language <i class="fas fa-chevron-down"></i></button>
        </div>
      </div>

      <!-- Tabs for Login and Register -->
      <div class="flex justify-between mb-4 bg-gray-800 p-1 rounded-md">
        <button
          @click="isLogin = true"
          :class="isLogin ? 'text-blue-500 bg-gray-900 rounded-md' : 'text-gray-400'"
          class="text-lg font-semibold w-full py-2"
        >
          Login
        </button>
        <button
          @click="isLogin = false"
          :class="!isLogin ? 'text-blue-500 bg-gray-900 rounded-md' : 'text-gray-400'"
          class="text-lg font-semibold w-full py-2"
        >
          Register
        </button>
      </div>

      <!-- Login Form -->
      <div v-if="isLogin">
        <div class="mb-4 relative">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
            v-model="username"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <i class="fas fa-user-circle text-gray-400"></i>
          </span>
        </div>
        <div class="mb-4 relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Login Password"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
            v-model="password"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword">
            <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'" class="w-5 h-5"></i>
          </span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <label class="flex items-center">
            <input type="checkbox" class="form-checkbox bg-gray-800 border-none text-blue-600" v-model="rememberMe" />
            <span class="ml-2 text-sm">Remember Me</span>
          </label>
          <a href="#" class="text-sm text-blue-500">Forget Password</a>
        </div>
        <button class="w-full bg-blue-600 py-3 rounded-md text-white text-lg font-semibold" @click="login">
          Login Now
        </button>
        <p class="text-center text-sm text-gray-400 mt-4">
          Encountered login problems, please contact <a href="#" class="text-blue-500">Online Customer Service</a>
        </p>
      </div>

      <!-- Register Form -->
      <div v-else>
        <div class="mb-4 relative">
          <input
            type="text"
            placeholder="Username"
            class="w-full p-3 bg-gray-800 rounded-md text-sm placeholder-gray-500"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <i class="fas fa-user-circle text-gray-400"></i>
          </span>
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
          <img src="../assets/icon-Language/Malaysia.jpg" alt="Country Code" class="w-6 h-6 mr-2 cursor-pointer" @click="toggleCountrySelection" />
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

    <!-- Country Selection Modal -->
    <transition name="slide-up">
      <div v-if="showCountryModal" class="fixed inset-x-0 bottom-0 bg-gray-900 text-white p-4 rounded-t-lg shadow-lg max-h-60 overflow-y-auto">
        <div class="flex justify-between items-center mb-4">
          <button @click="toggleCountrySelection" class="text-sm text-blue-500">Cancel</button>
          <span class="text-lg font-semibold">Area Selection</span>
          <button @click="confirmCountrySelection" class="text-sm text-blue-500">Confirm</button>
        </div>
        <ul>
          <li v-for="(country, index) in countries" :key="index" class="flex justify-between items-center py-2" @click="selectCountry(country)">
            <div class="flex items-center">
              <img :src="country.flag" alt="Country Flag" class="w-6 h-6 mr-2" />
              <span>{{ country.name }}</span>
            </div>
            <span>{{ country.code }}</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import malaysia from '../assets/icon-Language/Malaysia.jpg'
import hongkong from '../assets/icon-Language/HongKong.jpg'
export default {
  data() {
    return {
      isLogin: true, // Determines whether the Login or Register form is shown
      showPassword: false, // State to toggle the visibility of the password
      showConfirmPassword: false, // State to toggle the visibility of the confirm password
      showCountryModal: false,
      selectedCountryCode: '+84',
      countries: [
        { name: 'Malaysia', code: '+60', flag: malaysia },
        { name: 'Hong Kong', code: '+852', flag: hongkong },
        { name: 'Vietnam', code: '+84', flag: hongkong },
        { name: 'Cambodia', code: '+855', flag: hongkong },
        // Add more countries if needed
      ],
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    toggleCountrySelection() {
      this.showCountryModal = !this.showCountryModal;
    },
    selectCountry(country) {
      this.selectedCountryCode = country.code;
    },
    confirmCountrySelection() {
      this.toggleCountrySelection();
    },
  },
};
</script>

<style scoped>
/* Full-screen background */
.bg-cover {
  background-color: #1a202c; /* Fallback color */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* Modal slide-up transition */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter, .slide-up-leave-to /* .slide-up-leave-active in <2.1.8 */ {
  transform: translateY(100%);
}

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
