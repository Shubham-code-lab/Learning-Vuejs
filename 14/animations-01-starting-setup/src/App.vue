<template>
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
  
  <!--  -->
  <div class="container">
    <transition name="UserAdmin" mode="out-in">
      <button @click="showUser" v-if="!showUserAmin">show user</button>
      <button @click="showAdmin" v-else>show admin</button>
    </transition>
  </div>

  <div class="container">
    <!-- transition tag only have one direct child  -->

    <!-- default class name will be when no name attribute is given to transition tag v-enter-from, v-leave-from -->
    <!-- <transition>
    <p v-if="isParaVisible">This is paragraph</p>
    </transition> -->
    
    <!-- you can also pass your class to these attribute -->
    <!-- <transition enter-active-class="yourOwnClass" enter-to-class="yourOwnClass">
    <p v-if="isParaVisible">This is paragraph</p>
    </transition> -->

    <transition name="para">
    <p v-if="isParaVisible">This is paragraph</p>
    </transition>
    
    <button @click="togglePara">show paragraph</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      dialogIsVisible: false,
      canMoveBlock:false,
      isParaVisible:false,
      showUserAmin:false,
    };
  },
  methods: {
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

.para-enter-from{
  transform: translateY(-50px);
  opacity: 0;
}

/* vue calculate duration for animation */
.para-enter-active{
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
}
</style>