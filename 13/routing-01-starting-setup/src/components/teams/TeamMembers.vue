<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
    <router-link to="/teams/t1">visit team t1</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['teams', 'users'],
  props: ['teamId'],        //dynamic segment from main.js
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMember(teamId) {
      // console.log(this.$route.path);  //  /teams/t1  were t1 is dynamic part
      // console.log(this.$route.params.teamId); //only dynamic part
      this.members = [];
      this.teamName = '';
      // const teamId = route.params.teamId;
      const teamIdObject = this.teams.find((team) => team.id === teamId);
      const MembersId = teamIdObject.members; 
      for (const memberId of MembersId) {
        const member = this.users.find(user => user.id === memberId)
        this.members.push(member);
      }
    }
  },
  watch: {
    teamId(newId) {
      this.loadTeamMember(newId);
    }
  },
  created() {
    console.log(this.$route.query);
    this.loadTeamMember(this.teamId);
  },
  beforeRouteEnter(to, from, next) {    //call when this component load for first time
    console.log("Component beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteUpdate(to, from, next) {   //call when this component still exist but get diffrent dynamic segment i.e t1,t2 it work same what we done in watch  function
    console.log("Component beforeRouteUpdate");
    console.log(to, from);
    // this.loadTeamMember(to.prams.itemId);
    next();
  },
  beforeRouteLeave(to, from, next) {      //execute when user try to leave page we can warn user of unsaved cahnges on page for form submiting
    console.log("Component beforeRouteLeave");
    console.log(to, from);
    const check = confirm("do you realy wanna leave");
    next(check);
  },
  // watch:{
  //   $route(newRoute){
  //     const check = newRoute.params.teamId;      //watch execute whe route containing link or address link changes as it suppose to do 
  //     if(check)                                  // suppose we are in /team/t1 than we go to /team/t2 no problem watcher execute each time 
  //     this.loadTeamMember(newRoute);             // but when we go to /team backward watcher execute and but teamId(i.e :- t1,t2) which is used in loadMember method gives error becouse it is not present
  //   }
  // },
  // created(){  
  //  this.loadTeamMember(this.$route);
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>