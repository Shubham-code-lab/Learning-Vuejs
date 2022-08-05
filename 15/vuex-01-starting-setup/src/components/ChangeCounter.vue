<template>
    <div>
        <!-- <button @click="addValue">add value</button> -->

        <!-- <button @click="increased({value:10})">add value</button> -->
        
        <button @click="incrt()">add two</button>
        <button @click="incrd({value:10})">add value</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    methods:{
        // addValue(){
        //     // USING MUTATION
        //     // this.$store.commit('increased', {value:10});
        //     // this.$store.commit({
        //     //     type: 'increased',
        //     //     value: 10
        //     // });

        //     //USING ACTIONS
        //     // this.$store.dispatch('increased', {value:10});
        //     this.$store.dispatch({
        //         type: 'increased',
        //         value: 10
        //     });


            // ...mapActions(['increment','increased'])
            ...mapActions('number',{
                incrt: 'increment',
                incrd: 'increased'
            })

        }
    }

</script>
<style lang="">
    
</style>