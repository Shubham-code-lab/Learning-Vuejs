<template>
    <div>
        <button @click="authenticate({isValid:true})">Login</button>
        <button @click="authenticate({isValid:false})">Log Out</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    methods: {
        ...mapActions(['authenticate'])
    },
}
</script>
<style lang="">
    
</style>