<template>
    <div class="bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-full mx-auto">
      <!-- Header -->
      <div class="flex items-center mb-4">
        <img src="../assets/icon-payment/payment.png" alt="Payment Method Icon" class="w-6 h-6 mr-2" />
        <h2 class="text-lg font-semibold">Payment Method</h2>
      </div>
  
      <!-- Payment Method Logos -->
      <div class="flex flex-wrap items-center space-x-4 space-y-4">
        <img src="../assets/icon-payment/Tether.png" alt="Tether" class="w-12 h-12" />
        <img src="../assets/icon-payment/Bitcoin.png" alt="Bitcoin" class="w-12 h-12" />
        <img src="../assets/icon-payment/card.png" alt="Credit Card" class="w-12 h-12" />
        <img src="../assets/icon-payment/viettel-pay.png" alt="Viettel Pay" class="w-12 h-12" />
        <img src="../assets/icon-payment/momo.png" alt="MoMo" class="w-12 h-12" />
        <img src="../assets/icon-payment/zalo-pay.png" alt="Zalo Pay" class="w-12 h-12" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentMethod',
  };
  </script>
  
  <style scoped>
  /* Custom styles for Payment Method component */
  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  