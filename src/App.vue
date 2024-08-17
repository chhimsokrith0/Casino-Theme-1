<template>
  <div>
    <div class="sticky top-0 w-full z-50">
      <Header/>
    </div>

    <!-- Main Content - Router View -->
    <router-view />

    <!-- Navigation Bottom Component -->
    <NavigationBottom />

    <!-- Bottom Chat Service Component -->
    <ButtomChatService />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import NavigationBottom from './components/NavigationBottom.vue';
import ButtomChatService from './components/ButtomChatService.vue';
import ButtonGroup from './components/ButtonGroup.vue';
export default {

  components: {
    Header,
    NavigationBottom,
    ButtomChatService,
    ButtonGroup
  },
};
</script>

<style scoped>
/* You can add global or scoped styles here if necessary */
.sticky {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background-color: #1a202c; /* same as bg-gray-900 */
      z-index: 11; /* Ensure it stays above other content */
    }
</style>
