<template>
<div>
  <base-container title="Vuex" v-if="checkAuthentication">
      <!-- <h1>hii</h1> -->
    <the-counter></the-counter>
    <favorite-counter></favorite-counter>
    <button @click="increment">add two</button>
    <change-counter></change-counter>
  </base-container>
</div>
<div>
  <base-container title="authentication">
    <user-authentication></user-authentication>
  </base-container>
</div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteCounter from './components/FavoriteCounter.vue';
import UserAuthentication from './components/UserAuthentication.vue';
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteCounter,
    UserAuthentication
  },
  methods: {
    // addTwo(){
    //   // Using Mutation
    //   // this.$store.commit('increment');

    //   //Using Action
    //   this.$store.dispatch('increment');
    // },
    ...mapActions('number', ['increment'])
  },
  computed:{
    ...mapGetters(['checkAuthentication'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>