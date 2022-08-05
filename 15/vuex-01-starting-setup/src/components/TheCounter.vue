<template>
    <div>
        <h1>{{counterValue}}</h1>
    </div>
</template>
<script>
export default {
    computed:{
        counterValue(){
            // return this.$store.state.counter * 2;
            // return this.$store.getters.finalCounter;
            
            
            // name space
            return this.$store.getters['number/finalCounter'];
        }
    }
}
</script>
<style lang="">
    
</style>