<template>
<div class="container">
  <user-list></user-list>
</div>
  <div class="container">
    <div class="block" :class="{animate:canMoveBlock }"></div>
    <button @click="moveBlock">Animate</button>
  </div>
  <base-modal @close="hideDialog" :dialogIsVisible="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  
  <!-- working with mutiple direct child but make sure only is attached to the DOM also don't use two if statement use if and else mode props 
  out-in tell to (out) the current element and after it is gone (in) the other element by default it is in-out which is vice-versa-->
  <div class="container">
    <transition name="UserAdmin" mode="out-in">
      <button @click="showUser" v-if="!showUserAmin">show user</button>
      <button @click="showAdmin" v-else>show admin</button>
    </transition>
  </div>

  <div class="container">
    <!-- transition tag only have one direct child  -->

    <!-- default class name will be when no name props is given to transition tag v-enter-from, v-leave-from -->
    <!-- <transition>
    <p v-if="isParaVisible">This is paragraph</p>
    </transition> -->
    
    <!-- you can also pass your class to these attribute -->
    <!-- <transition enter-active-class="yourOwnClass" enter-to-class="yourOwnClass">
    <p v-if="isParaVisible">This is paragraph</p>
    </transition> -->

    <!-- javascript hooks to style usign javasccript -->
    <transition 
    name="para" 
    :css="false"
    @before-enter="paraBeforeEnter" 
    @enter="paraEnter" 
    @after-enter="paraAfterEnter" 
    @before-leave="paraBeforeEnter" 
    @leave="paraLeave" 
    @after-leave="paraAfterLeave"
    @enter-cancelled="paraEnterCancelled"
    @leave-cancelled="paraLeaveCancelled"
    >
    <p v-if="isParaVisible">This is paragraph</p>
    </transition>
    
    <button @click="togglePara">show paragraph</button>
  </div>
</template>  

<script>
import UserList from './components/UserList.vue'
export default {

components:{
  UserList
},
  data() {
    return { 
      dialogIsVisible: false,
      canMoveBlock:false,
      isParaVisible:false,
      showUserAmin:false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    // when animation on same element start again before first finishes this execute so we can cancell first animation
    paraEnterCancelled(el){
      console.log(el);
      console.log("paragraph enter cancelled");
      clearInterval(this.enterInterval);
    },
    paraLeaveCancelled(el){
      console.log(el);
      console.log("paragraph leave cancelled");
      clearInterval(this.leaveInterval);
    },
    paraBeforeEnter(el){
      console.log(el);
      console.log("paragraph before enter");
    },
    paraEnter(el,done){
      console.log(el);
      console.log("paragraph enter");
      let round = 1;
      this.enterInterval = setInterval(function(){
        el.style.opacity = round++ * 0.01;
        if(round >= 100){
          clearInterval(this.enterInterval);
          done();
        }
      },20);
    },
    paraAfterEnter(el){
      console.log(el);
      console.log("paragraph after enter");
    },
    paraBeforeLeave(el){
      console.log(el);
      console.log("paragraph before leave");
    },
    paraLeave(el,done){
      console.log(el);
      console.log("paragraph leave");
      let round = 100;
      this.leaveInterval = setInterval(function(){
        el.style.opacity = round-- * 0.01;
        if(round <= 1){
          clearInterval(this.leaveInterval);
          done();
        }
      },20);

    },
    paraAfterLeave(el){
      console.log(el);
      console.log("paragraph after leave");
    },
    showUser(){
      this.showUserAmin = true;
    },
    showAdmin(){
      this.showUserAmin = false;
    },
    togglePara(){
      this.isParaVisible = !this.isParaVisible;
    },
    moveBlock(){
      this.canMoveBlock = !this.canMoveBlock;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.animate{
  animation: animateBlock 0.3s ease-out forwards;
}

@keyframes animateBlock {
  0%{
    transform: translateX(0) scale(1);
  }
  75%{
    transform: translateX(-100px) scale(1.5);
  }
  100%{
    transform: translateX(-200px) scale(1);
  }
}

.UserAdmin-enter-active{
  animation: UserAdmin 0.3s ease-out;
}
.UserAdmin-leave-active{
  animation: UserAdmin 0.3s ease-out reverse;
}


  @keyframes UserAdmin {
 from{
  opacity: 0;
  transform: translateY(-30px);
 }
 to{
  opacity: 1;
  transform:  translateX(0);
 } 
}


.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

/* .para-enter-from{
  transform: translateY(-50px);
  opacity: 0;
} */

/* vue calculate duration for animation */
/* .para-enter-active{
  transition: all 0.3s ease-out;
}
.para-enter-leave{
  transform: translateY(0);
  opacity: 1;
}


.para-leave-from{
  transform: translateY(0);
  opacity: 1;
}
.para-leave-active{
  transition: all 0.3s ease-out;
}
.para-leave-to{
  transform: translateY(-50px);
  opacity: 0;
} */
</style>