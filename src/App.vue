<template>
  <div>
    <!-- Header Component -->
    <Header/>
   

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

export default {

  components: {
    Header,
    NavigationBottom,
    ButtomChatService,
  },
};
</script>

<style scoped>
/* You can add global or scoped styles here if necessary */
</style>
