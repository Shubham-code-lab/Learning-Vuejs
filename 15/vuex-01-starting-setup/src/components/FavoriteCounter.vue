<template>
    <div>
        <!-- {{counterValue}} -->
        {{normalizedCounter}}
    </div>
</template>

<script>
//using mapper helper
import {mapGetters} from 'vuex'

export default {
    computed:{
        // counterValue(){
        //     return this.$store.getters.normalizedCounter;
        // }

        // ...mapGetters(['normalizedCounter'])

        // namespace
        ...mapGetters('number',['normalizedCounter'])
    }
}
</script>
<style lang="">
    
</style>