<template>
  <div>
    <Header />
    <router-view />
    <NavigationBottom/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import NavigationBottom from './components/NavigationBottom.vue';
export default {
  components: {
    Header,
    NavigationBottom
  },
};
</script>
