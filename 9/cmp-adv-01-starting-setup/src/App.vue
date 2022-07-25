<template>
  <div>

    <the-header></the-header>

    <!-- <badge-list></badge-list> -->
    <!-- OR -->
    <badge-list />

    <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />

    <cource-goal #default="slotProps">
      <h1>{{ slotProps.item }}</h1>
      <h1>{{ slotProps['another-prop'] }}</h1>
    </cource-goal>
    <h1>==============================================================================================================
    </h1>

    <button @click="toggleComponent('toggle-first-component')">First components</button>
    <button @click="toggleComponent('toggle-second-component')">Second components</button>

    <!-- <toggle-first-component v-if="activeComponent === 'toggle-first-component'">
    </toggle-first-component>
    <toggle-second-component v-if="activeComponent === 'toggle-second-component'"></toggle-second-component> -->
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
// local registration
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourceGoal from './components/CourceGoal.vue';
import ToggleFirstComponent from './components/ToggleFirstComponent.vue';
import ToggleSecondComponent from './components/ToggleSecondComponent.vue';

export default {
  components: {
    'the-header': TheHeader,    //in template we can only use name containg dash and also self closing tag is not availble
    BadgeList: BadgeList,       //pascal tag is available also self closing tage is available
    UserInfo,                    //mordern javascript feature but same as above
    CourceGoal,
    ToggleFirstComponent,
    ToggleSecondComponent
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      activeComponent: 'toggle-first-component'
    };
  },
  methods: {
    toggleComponent(comp) {
      this.activeComponent = comp;
    }
  }
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>