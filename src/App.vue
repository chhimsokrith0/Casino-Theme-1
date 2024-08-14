<template>
  <div>
    <Header />
    <router-view />
    <NavigationBottom/>
    <ButtomChatService/>
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
    ButtomChatService
  },
};
</script>
