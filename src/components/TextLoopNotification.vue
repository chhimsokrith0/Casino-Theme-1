<template>
    <div class="relative w-full bg-gray-800 p-4 mb-6 overflow-hidden">
    <!-- Speaker Icon -->
    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5l-7 7h-1v-1.5L11 3v2zm3.14 3H19a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2m-5-1.04V18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.54L3 14.94V9.06l1-.52V8a1 1 0 0 1 1-1h2l.46-.09L12 3.04V8m5.14 1H19m1 2a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-.62.22L14 10m6 3v2a1 1 0 0 1-1 1h-2.46l-1.72 2.47M18 13v6" />
    </svg>
    <!-- Scrolling Text -->
    <div class="absolute inset-0 flex items-center justify-start whitespace-nowrap animate-marquee">
      <p class="ml-12 text-sm">
        {{ $t('TextLoop') }}
      </p>
    </div>
    <!-- Mail Icon -->
    <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m0 0l8-8M4 12l8 8m4-8h6m0 0l-8-8M4 12h6m0 0l-8 8m12-8h6m0 0l-8-8M12 12l8 8m0 0H4m12 0h6m0 0v6m0 0H4" />
    </svg>
  </div>
</template>
<style>
/* Custom animation for the marquee */
@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite; /* Adjusted timing for smoother scrolling */
}
</style>