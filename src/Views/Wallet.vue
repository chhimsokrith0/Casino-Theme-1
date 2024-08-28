<template>
    <div class="bg-gray-900 max-w-md w-full mx-auto min-h-screen flex flex-col justify-between p-4">
      <!-- Top Navigation Tabs Centered -->
      <div>
        <div class="flex justify-center space-x-4 border-b border-gray-700 pb-2 mb-4">
          <button
            @click="activeTab = 'deposit'"
            :class="{'text-white font-bold border-b-2 border-yellow-400': activeTab === 'deposit', 'text-gray-400': activeTab !== 'deposit'}"
            class="px-4 py-1"
          >
            Deposit
          </button>
          <button
            @click="activeTab = 'withdraw'"
            :class="{'text-white font-bold border-b-2 border-yellow-400': activeTab === 'withdraw', 'text-gray-400': activeTab !== 'withdraw'}"
            class="px-4 py-1"
          >
            Withdraw
          </button>
        </div>
  
        <!-- Content Based on Active Tab -->
        <div v-if="activeTab === 'deposit'">
          <!-- Deposit Methods -->
          <div class="flex justify-around mb-4 gap-2">
            <button
              @click="selectDepositMethod('Quick Deposit')"
              :class="['flex flex-col items-center p-2 rounded-lg w-1/3', selectedDepositMethod === 'Quick Deposit' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white']"
            >
              <i class="fas fa-rocket text-2xl mb-1"></i>
              <span class="text-sm">Quick Deposit</span>
            </button>
            <button
              @click="selectDepositMethod('Local Bank')"
              :class="['flex flex-col items-center p-2 rounded-lg w-1/3 relative', selectedDepositMethod === 'Local Bank' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white']"
            >
              <i class="fas fa-credit-card text-2xl mb-1"></i>
              <span class="text-sm">Local Bank</span>
              <span class="absolute top-1 right-1 bg-red-500 text-xs text-white rounded px-1">New</span>
            </button>
            <button
              @click="selectDepositMethod('E-wallet')"
              :class="['flex flex-col items-center p-2 rounded-lg w-1/3 relative', selectedDepositMethod === 'E-wallet' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white']"
            >
              <i class="fas fa-coins text-2xl mb-1"></i>
              <span class="text-sm">E-wallet</span>
              <span class="absolute top-1 right-1 bg-green-500 text-xs text-white rounded px-1">+1%</span>
            </button>
          </div>
  
          <!-- Amount Selection -->
          <div v-if="selectedDepositMethod !== 'E-wallet'" class="mb-4">
            <input
              type="text"
              placeholder="minimum/maximum 100000/100000000"
              class="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 mb-2"
              v-model="selectedAmount"
            >
            <div class="grid grid-cols-2 gap-2">
              <button @click="selectAmount(50000)" class="bg-gray-700 rounded-lg py-2 w-full text-white">50,000</button>
              <button @click="selectAmount(100000)" class="bg-gray-700 rounded-lg py-2 w-full text-white">100,000</button>
              <button @click="selectAmount(500000)" class="bg-gray-700 rounded-lg py-2 w-full text-white">500,000</button>
              <button @click="selectAmount(1000000)" class="bg-gray-700 rounded-lg py-2 w-full text-white">1,000,000</button>
              <button @click="selectAmount(3000000)" class="bg-gray-700 rounded-lg py-2 w-full text-white col-span-2">3,000,000</button>
            </div>
          </div>
  
          <!-- Conditional Display for Local Bank Selection -->
          <div v-if="selectedDepositMethod === 'Local Bank'" class="mb-4">
            <!-- Payment Method -->
            <div class="mb-4">
              <span class="text-yellow-500 font-bold mb-2 block">* Payment method (required)</span>
              <div class="grid grid-cols-2 gap-2 text-white">
                <button @click="selectPaymentMethod('Online Transfer'); showModal = true" :class="['flex flex-col items-center bg-gray-800 rounded-lg p-2 text-center', selectedPaymentMethod === 'Online Transfer' ? 'border border-blue-500' : '']">
                  <img src="../assets/logo-bank/OnlineTransfer.png" alt="Online Transfer" class="w-10 mx-auto mb-1">
                  Online Transfer
                </button>
                <button @click="selectPaymentMethod('Scan QR Code')" :class="['flex flex-col items-center bg-gray-800 rounded-lg p-2 text-center', selectedPaymentMethod === 'Scan QR Code' ? 'border border-blue-500' : '']">
                  <img src="../assets/logo-bank/ScanQRCode.png" alt="Scan QR Code" class="w-10 mx-auto mb-1">
                  Scan QR Code
                </button>
              </div>
            </div>
  
            <!-- Bank Selection -->
            <div class="flex items-center mb-2">
              <span class="text-yellow-500 font-bold">* Select Bank</span>
              <i class="fas fa-info-circle text-gray-400 ml-2" title="Supports Local Bank transactions"></i>
            </div>
            <select class="w-full p-2 rounded bg-gray-800 text-white mb-4">
              <option>Select a bank</option>
              <option>Bank 1</option>
              <option>Bank 2</option>
              <option>Bank 3</option>
            </select>
  
            <!-- Promotion Selection -->
            <div class="mb-4">
              <span class="text-white">Promotion (optional)</span>
              <select class="w-full p-2 rounded bg-gray-800 text-white mt-2">
                <option>Select promotion (conditions apply)</option>
              </select>
            </div>

            <!-- Confirm Button -->
            <button class="w-full py-3 bg-blue-500 rounded-lg text-white font-bold mt-4">Confirm</button>
          </div>
  
          <!-- E-wallet Tab Content -->
          <div v-if="selectedDepositMethod === 'E-wallet'" class="mb-4">
            <!-- Cryptocurrency Selection -->
            <div class="mb-4">
              <span class="text-yellow-500 font-bold mb-2 block">Currency Type</span>
              <div class="grid grid-cols-3 gap-2 text-white">
                <button @click="selectCrypto('USDT')" :class="['flex flex-col items-center bg-gray-800 rounded-lg p-4 text-center', selectedCrypto === 'USDT' ? 'border border-blue-500' : '']">
                  <i class="fas fa-dollar-sign text-2xl mb-1"></i>
                  USDT
                </button>
                <button @click="selectCrypto('ETH')" :class="['flex flex-col items-center bg-gray-800 rounded-lg p-4 text-center', selectedCrypto === 'ETH' ? 'border border-blue-500' : '']">
                  <i class="fab fa-ethereum text-2xl mb-1"></i>
                  ETH
                </button>
                <button @click="selectCrypto('BTC')" :class="['flex flex-col items-center bg-gray-800 rounded-lg p-4 text-center', selectedCrypto === 'BTC' ? 'border border-blue-500' : '']">
                  <i class="fab fa-bitcoin text-2xl mb-1"></i>
                  BTC
                </button>
              </div>
            </div>
  
            <!-- Transaction Method Selection -->
            <div class="mb-4">
              <span class="text-yellow-500 font-bold mb-2 block">Select Transaction Method</span>
              <div class="flex justify-around text-white">
                <button @click="selectTransactionMethod('TRC20')" :class="['bg-gray-800 rounded-lg py-2 px-4', selectedTransactionMethod === 'TRC20' ? 'border border-blue-500' : '']">
                  TRC20
                </button>
                <button @click="selectTransactionMethod('ERC20')" :class="['bg-gray-800 rounded-lg py-2 px-4', selectedTransactionMethod === 'ERC20' ? 'border border-blue-500' : '']">
                  ERC20
                </button>
              </div>
            </div>

            <!-- BTC Transaction Details -->
            <div v-if="selectedCrypto === 'BTC'" class="bg-gray-800 p-4 rounded-lg text-white">
                <h3 class="font-bold text-lg mb-2">Transaction Method: BTC</h3>
                <div class="mb-4">
                <p>Address:</p>
                <div class="flex items-center bg-gray-900 p-2 rounded-lg">
                    <input type="text" value="1C5qMWnLY7CnZ18jVNvtBp6onjkyVfsvx8" readonly class="w-full bg-transparent text-white">
                    <button class="ml-2 text-blue-400">Copy</button>
                </div>
                <img src="../assets/logo-bank/BTC.png" alt="BTC QR Code" class="w-32 h-32 mx-auto mt-2">
                <p class="text-xs text-red-400 mt-2">* Please only use your BTC wallet to scan this QR code. The QR code can only be scanned once.</p>
                </div>
            </div>
  
            <!-- Complete Transaction Button -->
            <button class="w-full py-3 bg-blue-500 rounded-lg text-white font-bold mt-4">Complete Transaction</button>
  
            <!-- Important Information Section -->
            <div class="mt-4">
              <p class="text-red-500 text-sm font-bold">Important: If you need any assistance, please contact Customer Service.</p>
              <ul class="text-gray-400 text-xs mt-2 list-disc list-inside">
                <li>Members can scan the QR code or copy the address to proceed with the transaction.</li>
                <li>Each member can only register and use one withdrawal address. Once the currency is deposited, it will be confirmed and can be updated on the website.</li>
                <li>The exchange rate is for reference purposes only. The final rate will be confirmed after the transaction is completed.</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Modal for Online Transfer -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 flex items-center justify-center">
          <div class="bg-gray-800 rounded-lg p-6 w-11/12 max-w-md">
            <div class="flex justify-between items-center mb-4">
              <span class="text-white font-bold text-lg">Suggestions</span>
              <button @click="closeModal" class="text-white">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-1">Full Name</label>
              <input type="text" placeholder="Please enter your full name" class="w-full p-2 rounded bg-gray-700 text-white">
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-1">Local Bank</label>
              <select class="w-full p-2 rounded bg-gray-700 text-white">
                <option>Choose Local Bank</option>
                <option>Bank 1</option>
                <option>Bank 2</option>
                <option>Bank 3</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-1">Bank Account Number</label>
              <input type="text" placeholder="Account number" class="w-full p-2 rounded bg-gray-700 text-white">
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-1">Withdrawal Password</label>
              <input type="password" placeholder="Please enter your withdrawal password" class="w-full p-2 rounded bg-gray-700 text-white">
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-1">Confirm Password</label>
              <input type="password" placeholder="Please confirm your password" class="w-full p-2 rounded bg-gray-700 text-white">
            </div>
            <button class="w-full py-2 bg-blue-500 rounded-lg text-white font-bold mt-4">Submit</button>
          </div>
        </div>
      </div>
  
      
  
      <!-- Help Section -->
      <p class="text-xs text-gray-500 mt-4 text-center">
        Having issues with your deposit? Please contact <span class="text-blue-400">Customer Service</span> for assistance.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 'deposit', // Set the default active tab to 'deposit'
        selectedDepositMethod: null, // To store the selected deposit method
        selectedCrypto: null, // To store the selected cryptocurrency
        selectedTransactionMethod: null, // To store the selected transaction method
        selectedAmount: '', // To store the selected amount
        showModal: false, // To control the modal visibility
      };
    },
    methods: {
      selectDepositMethod(method) {
        this.selectedDepositMethod = method;
        console.log(`Selected deposit method: ${method}`);
      },
      selectPaymentMethod(method) {
        this.selectedPaymentMethod = method;
        console.log(`Selected payment method: ${method}`);
      },
      selectAmount(amount) {
        this.selectedAmount = amount;
        console.log(`Selected amount: ${amount}`);
      },
      selectCrypto(crypto) {
        this.selectedCrypto = crypto;
        console.log(`Selected cryptocurrency: ${crypto}`);
      },
      selectTransactionMethod(method) {
        this.selectedTransactionMethod = method;
        console.log(`Selected transaction method: ${method}`);
      },
      closeModal() {
        this.showModal = false; // Close the modal by setting visibility to false
      },
      
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  