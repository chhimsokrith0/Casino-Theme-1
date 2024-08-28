<template>
  <div class="bg-gray-900 min-h-screen flex flex-col items-center text-white">
    <!-- Notification Area with Text Loop -->
    <TextLoopNotification/>

    <div class="p-1">
      <BalanceActions/>
    </div>

    <!-- Login and Register Buttons -->
    <ButtonLoginRegister/>

    <!-- Button Group -->
    <div class="w-full mb-6 px-4">
      <ButtonGroup />
    </div>

    <!-- Carousel -->
    <div class="w-full mb-6 px-4">
      <Carousel />
    </div>

    <!-- Casino Section -->
    <div class="w-full mb-6 px-4">
      <Casino />
    </div>

    <!-- Broadcast Section -->
    <Broadcast/>

    <!-- Reviews Section -->
    <Reviews/>

    <!-- Brand Endorsement Section -->
    <BrandEndorsement/>

    <!-- Valencia Club Card Section -->
    <ValenciaClubCard/>

    <GameLicense/>

    <License/>

    <PaymentMethod/>

    <Footer/>

    <!-- Additional Spacing -->
    <div class="mb-36"></div>
  </div>
</template>

<script>
import ButtonGroup from '../components/ButtonGroup.vue';
import Carousel from '../components/Carousel.vue';
import Casino from '../components/Casino.vue';
import Broadcast from '../components/Broadcast.vue';
import Reviews from '../components/Reviews.vue';
import BrandEndorsement from '../components/BrandEndorsement.vue';
import ValenciaClubCard from '../components/ValenciaClubCard.vue';
import GameLicense from '../components/GameLicense.vue';
import License from '../components/License.vue';
import PaymentMethod from '../components/PaymentMethod.vue';
import Footer from '../components/Footer.vue';
import ButtonLoginRegister from '../components/ButtonLoginRegister.vue';
import TextLoopNotification from '../components/TextLoopNotification.vue';
import BalanceActions from '../components/BalanceActions.vue';

export default {
  name: 'Home',
  components: {
    ButtonLoginRegister,
    ButtonGroup,
    Carousel,
    Casino,
    Broadcast,
    Reviews,
    BrandEndorsement,
    ValenciaClubCard,
    GameLicense,
    License,
    PaymentMethod,
    Footer,
    TextLoopNotification,
    BalanceActions
  },
};
</script>

<style scoped>

</style>
